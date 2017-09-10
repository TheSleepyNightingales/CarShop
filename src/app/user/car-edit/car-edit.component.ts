import {Component, Input, OnInit} from '@angular/core';
import { NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../user.service';
import { Car } from '../../shared/models/Car';
import {FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})

export class CarEditComponent implements OnInit {
  elementId: string;
  id: string;
  car: FirebaseListObservable<any[]>;
  constructor(private UserService: UserService, private Router: Router, private AuthService: AuthService,
private activatedRoute: ActivatedRoute) {
    this.id = this.AuthService.currentUser().uid.toString();
    console.log(this.id);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.elementId = params['licensePlate'];
    });
    this.car = this.UserService.getCar(this.id, this.elementId);
  }
  onSignUpS(form: NgForm) {
    const km = form.value.km;
    const licensePlate = this.elementId;
    const make = form.value.make;
    const model = form.value.model;
    const year = form.value.year;
    const photoUrl = form.value.img;
    const power = form.value.power;
    const lastOilChange = form.value.lastOilChange;
    console.log(km);
    console.log(make);
    const car = new Car(km, licensePlate, make, model, year, power, lastOilChange);
    this.UserService.updateCar(car, this.elementId);
    this.Router.navigate(['/users/dashboard']);
    console.log(make.toString());
  }
}
