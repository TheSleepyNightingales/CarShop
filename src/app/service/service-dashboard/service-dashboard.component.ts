import { Observable } from 'rxjs/Observable';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from './../../auth/auth.service';
import { ServiceService } from './../service.service';
import { CarService } from './../../shared/models/CarService';
import { FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-dashboard',
  templateUrl: './service-dashboard.component.html',
  styleUrls: ['./service-dashboard.component.css']
})
export class ServiceDashboardComponent implements OnInit {

  carService: FirebaseListObservable<any>;

  constructor(private CarServiceService: ServiceService, private AuthService: AuthService) {
  }

  ngOnInit() {
    const uid = this.AuthService.currentUser().uid;
    this.carService = this.CarServiceService.getService(uid);
  }

}
