import { CarServiceService } from './../car-service.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-services-list',
  templateUrl: './car-services-list.component.html',
  styleUrls: ['./car-services-list.component.css']
})
export class CarServicesListComponent implements OnInit {

  carServices: FirebaseListObservable<any>;

  constructor(private CarServiceService: CarServiceService) { }

  ngOnInit() {
    this.carServices = this.CarServiceService.getAll();
  }

}
