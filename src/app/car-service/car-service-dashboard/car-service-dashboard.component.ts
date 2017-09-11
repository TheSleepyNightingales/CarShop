import { CarServiceService } from './../car-service.service';
import { Observable } from 'rxjs/Observable';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from './../../auth/auth.service';
import { CarService } from './../../shared/models/CarService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-service-dashboard',
  templateUrl: './car-service-dashboard.component.html',
  styleUrls: ['./car-service-dashboard.component.css']
})
export class CarServiceDashboardComponent implements OnInit {
  uid: string;

  profileType: string;

  type: string;

  carService: FirebaseListObservable<any>;

  isVisible: boolean;

  galleryImages: Array<any>;

  topMechanics: any[];

  constructor(private CarServiceService: CarServiceService, private AuthService: AuthService) {
  }

  ngOnInit() {
    this.uid = this.AuthService.currentUser().uid;
    this.type = 'service';
    this.profileType = 'user';
    this.carService = this.CarServiceService.getService(this.uid);
    this.carService.subscribe(s => {
      if (s[0].gallery) {
        console.log('has images');
        this.galleryImages = Object.values(s[0].gallery);
      }
    });

    this.CarServiceService.getMyTopMechanics()
      .subscribe((mechanics) => {
        this.topMechanics = mechanics;
      });
  }

  show($event) {
    this.isVisible = true;
  }

  resetVisibility($event) {
    this.isVisible = false;
  }

}
