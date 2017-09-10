import { CarServicePubService } from './../car-service-pub.service';
import { CarService } from './../../shared/models/CarService';
import { Component, OnInit } from '@angular/core';
import { UserServicePubService } from '../../user/user-service-pub.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/forms';
import { IAlert } from '../../shared/models/IAlert';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-car-service-signup',
  templateUrl: './car-service-signup.component.html',
  styleUrls: ['./car-service-signup.component.css']
})
export class CarServiceSignupComponent implements OnInit {

  alert: IAlert;
  anAlert: boolean;

  constructor(private CarServiceService: CarServicePubService, private Router: Router) { }
    ngOnInit() {
      this.anAlert = false;
      this.alert = {
        type: '',
        message: '',
      };
    }

    onSignUp(form: NgForm) {
      const email = form.value.email;
      const name = form.value.name;
      const password = form.value.password;
      const owner = form.value.owner;
      const licenseNumber = form.value.license;
      const address = form.value.address;
      const activities = form.value.activities;

      this.CarServiceService.createCarService(email, password)
      .then((createdService) => {
        const carService = new CarService(createdService.uid, email, name, owner, licenseNumber, address, activities);
        this.CarServiceService.addCarService(carService);

        this.Router.navigate(['/']);
      })
      .catch((error: any) => {
        // Handle Errors here.
        const errorCode: string = error.code;
        const errorMessage = error.message;
        if (errorCode) {
          this.anAlert = true;
          this.alert.message = errorMessage;
          this.alert.type = 'danger';
        }
        // console.log(error);
      });
    }
    public closeAlert(alert: IAlert) {
      alert.message = '';
      alert.type = '';
      this.anAlert = false;
    }

}

// TODO move to a models folder
