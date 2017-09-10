import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/forms';
import { UserServicePubService } from '../user-service-pub.service';
import { User } from '../../shared/models/User';
import { Router } from '@angular/router';
import { IAlert } from '../../shared/models/IAlert';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  alert: IAlert;
  anAlert: boolean;

  constructor(private UserService: UserService, private Router: Router) { }
  ngOnInit() {
    this.anAlert = false;
    this.alert = {
      type: '',
      message: '',
    };
  }

  onSignUp(form: NgForm) {
    const email = form.value.email;
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const shortIntro = form.value.intro;

        const user = new User(this.UserService.userId, email, firstName, lastName, shortIntro);
        this.UserService.updateUser(user);

        this.Router.navigate(['/dashboard']);
  }
  public closeAlert(alert: IAlert) {
    alert.message = '';
    alert.type = '';
    this.anAlert = false;
  }

}
