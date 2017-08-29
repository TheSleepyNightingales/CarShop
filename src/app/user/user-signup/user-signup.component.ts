import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/forms';
import { UserServicePubService } from '../user-service-pub.service';
import { User } from '../../shared/models/User';
import { Router } from '@angular/router';
import { IAlert } from '../../shared/models/IAlert';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  alert: IAlert;
  anAlert: boolean;

  constructor(private UserService: UserServicePubService, private Router: Router) { }
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
      .then((createdUser) => {
        // console.log(success);
        const user = new User(createdUser.uid, email, firstName, lastName, shortIntro);
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
