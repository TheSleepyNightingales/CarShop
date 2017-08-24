import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { User } from '../../user/models/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  alert: IAlert;
  anAlert: boolean;
  email: string;

  users: FirebaseListObservable<any[]>;

  user: User;
  constructor(private UserService: UserService, private Router: Router, db: AngularFireDatabase) {
    this.users = db.list('/users');
   }
    ngOnInit() {
      this.anAlert = false;
      this.alert = {
        type: '',
        message: '',
      };
    }

    onSignUp(form: NgForm) {
      this.email = form.value.email;
      const password = form.value.password;
      this.UserService.createUser(this.email, password).catch((error: any) => {
        // Handle Errors here.
        const errorCode: string = error.code;
        const errorMessage = error.message;
        if (errorCode) {
          this.anAlert = true;
          this.alert.message = errorMessage;
          this.alert.type = 'danger';
        }
        console.log(error);
      });

      this.UserService.addUser(this.user);

      this.Router.navigate(['/']);
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
