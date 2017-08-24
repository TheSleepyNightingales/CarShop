import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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
      const password = form.value.password;
      const firstName = form.value.firstName;
      const lastName = form.value.lastName;
      const shortIntro = form.value.intro;

      this.UserService.createUser(email, password)
      .then((success) => {
        const user = new User(email, firstName, lastName, shortIntro);
        this.UserService.addUser(user);

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
export interface IAlert {
  type: string;
  message: string;
}
