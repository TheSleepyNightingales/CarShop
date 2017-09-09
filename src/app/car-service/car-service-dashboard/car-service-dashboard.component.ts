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
  // private carService: CarService;
  carService: FirebaseListObservable<any>;

  constructor(private CarServiceService: CarServiceService, private AuthService: AuthService) {
  }

  ngOnInit() {
    const uid = this.AuthService.currentUser().uid;
    this.carService = this.CarServiceService.getService(uid);
    console.log(this.carService);
  }

}
