import { CarServiceService } from './../car-service.service';
import { AuthService } from './../../auth/auth.service';
import { Offer } from './../../shared/models/Offer';
import { Component, OnInit } from '@angular/core';
import { User } from "../../shared/models/User";

@Component({
  selector: 'app-car-service-offers',
  templateUrl: './car-service-offers.component.html',
  styleUrls: ['./car-service-offers.component.css']
})
export class CarServiceOffersComponent implements OnInit {
  uid: string;

  myOffers: Offer[];

  myClients: User[];

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
      .subscribe((offer) => {
        const send = new Offer(offer.title, offer.category, offer.startDate, offer.endDate, offer.text);
        send.authorId = this.uid;
        send.authorEmail = this.authService.currentUser().email;

        if (this.myClients.length !== 0) {
          this.myClients.forEach((clientId) => {
            // Send to client
            console.log(clientId);
          });
        }
      });
  }

}
