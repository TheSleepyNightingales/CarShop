import { CarServiceService } from './../car-service.service';
import { Observable } from 'rxjs/Observable';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from './../../auth/auth.service';
import { CarService } from './../../shared/models/CarService';
import { FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-service-dashboard',
  templateUrl: './car-service-dashboard.component.html',
  styleUrls: ['./car-service-dashboard.component.css']
})
export class CarServiceDashboardComponent implements OnInit {
  uid: string;

  type: string;

  carService: FirebaseListObservable<any>;

  isVisible: boolean;

  galleryImages: Array<any>;

  constructor(private CarServiceService: CarServiceService, private AuthService: AuthService) {
  }

  ngOnInit() {
    this.uid = this.AuthService.currentUser().uid;
    this.type = 'service';
    this.carService = this.CarServiceService.getService(this.uid);
    this.carService.subscribe(s => {
      console.log(s[0]);
      this.galleryImages = Object.values(s[0].gallery);
      console.log(this.galleryImages);
    });
  }

  showUpload($event) {
    this.isVisible = true;
  }

  hideUpload($event) {
    this.isVisible = false;
  }

}
