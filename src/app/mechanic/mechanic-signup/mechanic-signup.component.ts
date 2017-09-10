import { Component, OnInit } from '@angular/core';
import { MechanicPubService } from "../mechanic-pub.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Mechanic } from "../../shared/models/Mechanic";
import { IAlert } from "../../shared/models/IAlert";

@Component({
  selector: 'app-mechanic-signup',
  templateUrl: './mechanic-signup.component.html',
  styleUrls: ['./mechanic-signup.component.css']
})
export class MechanicSignupComponent implements OnInit {

  alert: IAlert;
  anAlert: boolean;

  constructor(private MechanicPubService: MechanicPubService, private Router: Router) {
  }

  ngOnInit() {
    this.anAlert = false;
    this.alert = {
      type: '',
      message: '',
    };
  }

  mechanicSingUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const position = form.value.position;
    const workPlace = form.value.workPlace;
    const workExperience = form.value.workExperience;

    this.MechanicPubService.createMechanic(email, password)
      .then((createdMechanic) => {
        const mechanic = new Mechanic(createdMechanic.uid, email, firstName, lastName,
          position, workPlace, workExperience);
        this.MechanicPubService.addMechanic(mechanic);

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
      });
  }
}
