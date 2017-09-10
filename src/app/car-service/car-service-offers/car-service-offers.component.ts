import { CarServiceService } from './../car-service.service';
import { AuthService } from './../../auth/auth.service';
import { Offer } from './../../shared/models/Offer';
import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-car-service-offers',
  templateUrl: './car-service-offers.component.html',
  styleUrls: ['./car-service-offers.component.css']
})
export class CarServiceOffersComponent implements OnInit {
  uid: string;

  myOffers: Offer[];

  myClients: any[];

  constructor(private authService: AuthService, private service: CarServiceService) { }

  ngOnInit() {
    this.uid = this.authService.currentUser().uid;
    this.service.getOffers(this.uid)
      .subscribe(offers => {
        this.myOffers = offers;
      });
    this.service.getClients(this.uid)
      .subscribe(clients => {
        this.myClients = clients;
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

  sendOffer(id: string) {
    this.service.getOffer(this.uid, id)
      .subscribe((r) => {
        const offer = new Offer(r.title, r.category, r.startDate, r.endDate, r.text);
        offer.authorId = this.uid;
        offer.authorEmail = this.authService.currentUser().email;
        if (this.myClients.length !== 0) {
          this.myClients.forEach((clientId) => {
            this.service.sendOffer(clientId.$value, offer);
          });
        }
      });
  }

}
