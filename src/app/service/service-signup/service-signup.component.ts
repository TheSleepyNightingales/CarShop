import { CarService } from './../../shared/models/CarService';
import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { UserServicePubService } from '../../user/user-service-pub.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/forms';
import { IAlert } from '../../shared/models/IAlert';

@Component({
  selector: 'app-service-signup',
  templateUrl: './service-signup.component.html',
  styleUrls: ['./service-signup.component.css']
})
export class ServiceSignupComponent implements OnInit {

  alert: IAlert;
  anAlert: boolean;

  constructor(private ServiceService: ServiceService, private Router: Router) { }
    ngOnInit() {
      this.anAlert = false;
      this.alert = {
        type: '',
        message: '',
      };
    }

    onSignUp(form: NgForm) {
      const email = form.value.email;
      const password = form.value.password;
      const owner = form.value.owner;
      const licenseNumber = form.value.license;
      const address = form.value.address;
      const activities = form.value.activities;

      this.ServiceService.createCarService(email, password)
      .then((createdService) => {
        const carService = new CarService(createdService.uid, email, owner, licenseNumber, address, activities);
        this.ServiceService.addCarService(carService);

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
