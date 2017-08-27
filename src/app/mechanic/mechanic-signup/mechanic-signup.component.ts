import { Component, OnInit } from '@angular/core';
import { MechanicService } from "../mechanic.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { passBoolean } from "protractor/built/util";
import { Mechanic } from "../../shared/models/Mechanic";

@Component({
  selector: 'app-mechanic-signup',
  templateUrl: './mechanic-signup.component.html',
  styleUrls: ['./mechanic-signup.component.css']
})
export class MechanicSignupComponent implements OnInit {

  constructor(private MechanicService: MechanicService, private Router: Router) {
  }

  ngOnInit() {

  }

  mechanicSingUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const photoUrl = form.value.photoUrl;
    const position = form.value.position;
    const workPlace = form.value.workPlace;
    const workExperience = form.value.workExperience;

    this.MechanicService.createMechanic(email, password)
      .then((Cmechanic) => {
        const mechanic = new Mechanic(Cmechanic.uid, email, firstName, lastName, photoUrl,
          position, workPlace, workExperience);
        this.MechanicService.addMechanic(mechanic);
        console.log(mechanic);
        this.Router.navigate(['/']);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
