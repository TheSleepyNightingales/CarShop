import {Component, NgModule, OnInit} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../../auth/auth.service';
import {FormsModule, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from '../../shared/models/Car';




@Component({
  selector: 'app-user-create-car',
  templateUrl: './user-create-car.component.html',
  styleUrls: ['./user-create-car.component.css']
})

export class UserCreateCarComponent implements OnInit {


  constructor(private UserService: UserService, private Router: Router) { }

  ngOnInit() {
  }

  onSignUpS(form: NgForm) {
    const km = form.value.km;
    const make = form.value.make;
    const model = form.value.model;
    const year = form.value.year;
    const photoUrl = form.value.photoUrl;
    const power = form.value.power;
    const lastOilChange = form.value.lastOilChange;
    console.log(km);
    console.log(make);
    const car = new Car(km, make, model, year, photoUrl, power, lastOilChange);
    this.UserService.addCar(car);
    this.Router.navigate(['/users/dashboard']);
    console.log(make.toString());
  }
}
