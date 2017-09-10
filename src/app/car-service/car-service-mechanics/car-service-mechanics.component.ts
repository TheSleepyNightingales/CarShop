import { Offer } from './../../shared/models/Offer';
import { MechanicService } from './../../mechanic/mechanic.service';
import { AuthService } from './../../auth/auth.service';
import { CarServiceService } from './../car-service.service';
import { Mechanic } from './../../shared/models/Mechanic';
import { FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-service-mechanics',
  templateUrl: './car-service-mechanics.component.html',
  styleUrls: ['./car-service-mechanics.component.css']
})
export class CarServiceMechanicsComponent implements OnInit {
  uid: string;

  myMechanics: Mechanic[];

  isAlertVisible: boolean;

  constructor(private service: CarServiceService, private AuthService: AuthService, private MechanicService: MechanicService) {
  }

  ngOnInit() {
    this.uid = this.AuthService.currentUser().uid;
    this.service.getMechanics(this.uid)
      .subscribe(mechanics => {
        this.myMechanics = mechanics;
      });
  }

  addMechanic(email) {
    let alreadyAdded = false;
    this.myMechanics.forEach(m => {
      if (m.email === email) {
        alreadyAdded = true;
      }
    });

    if (alreadyAdded) {
      // Inform user
      this.isAlertVisible = true;
    } else {
      this.MechanicService.searchMechanicByEmail(email)
        .subscribe(response => {
          if (response.length === 1 && response[0].role === 'mechanic') {
            const res = response[0];
            // Add mechanic to this car service
            const mechanic = {
              id: res.id,
              email: res.email,
              firstName: res.firstName,
              lastName: res.lastName,
              position: res.position,
              workExperience: res.workExperience,
              photoUrl: res.photoUrl,
              rating: res.rating
            };
            this.service.addMechanic(this.uid, res.id, mechanic);
          } else {
            // Inform user
            this.isAlertVisible = true;
          }
        });
    }
  }

  resetVisibility($event) {
    this.isAlertVisible = false;
  }
}
