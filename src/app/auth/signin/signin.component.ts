import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  alert: IAlert;
  anAlert: boolean;
  email: string;
  constructor(private AuthService: AuthService) { }
    ngOnInit() {
      this.anAlert = false;
      this.alert = {
        type: '',
        message: '',
      };
    }

    onSignIn(form: NgForm) {
      this.email = form.value.email;
      const password = form.value.password;
      this.AuthService.signInWithEmailAndPassword(this.email, password).then(userInfo => {
        console.log(userInfo);
      }).catch((error: any) => {
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
