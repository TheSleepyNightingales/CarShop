import { CarServiceService } from './../car-service.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { CarService } from './../../shared/models/CarService';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-service-edit',
  templateUrl: './car-service-edit.component.html',
  styleUrls: ['./car-service-edit.component.css']
})
export class CarServiceEditComponent implements OnInit {

  @Input() carService: FirebaseListObservable<any>;

  isAlertVisible: boolean;

  constructor(private service: CarServiceService) { }

  ngOnInit() {
  }

  editProfile(name, owner, address, activities) {
    console.log('editing');
    this.carService.subscribe((service) => {
      const newService = service[0];
      newService.name = name;
      newService.owner = owner;
      newService.address = address;
      newService.activities = activities;
      this.service.updateCarService(newService);
      this.isAlertVisible = true;
      setTimeout(x => {
        this.resetVisibility();
      }, 2000);
    });
  }

  resetVisibility() {
    this.isAlertVisible = false;
  }

}
