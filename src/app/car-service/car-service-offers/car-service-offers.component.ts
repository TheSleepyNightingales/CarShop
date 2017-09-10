import { CarServiceService } from './../car-service.service';
import { AuthService } from './../../auth/auth.service';
import { Offer } from './../../shared/models/Offer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-service-offers',
  templateUrl: './car-service-offers.component.html',
  styleUrls: ['./car-service-offers.component.css']
})
export class CarServiceOffersComponent implements OnInit {
  uid: string;

  myOffers: Offer[];

  constructor(private authService: AuthService, private service: CarServiceService) { }

  ngOnInit() {
    this.uid = this.authService.currentUser().uid;
    this.service.getOffers(this.uid)
      .subscribe(offers => {
        this.myOffers = offers;
      });
  }

  addOffer(title, category, endDate, text) {
    const date = new Date();
    const today = date.toLocaleDateString();
    const dueDate = new Date(endDate).toLocaleDateString();
    const newOffer = new Offer(title, category, today, dueDate, text);
    const uid = this.authService.currentUser().uid;
    this.service.addOffer(uid, newOffer);
  }

}
