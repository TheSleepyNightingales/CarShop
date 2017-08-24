import * as firebase from 'firebase/app';

import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private AngularFA: AngularFireAuth, private Router: Router) { }

  createUserWithEmailAndPassword(email: string, password: string): firebase.Promise<any> {
    return this.AngularFA.auth.createUserWithEmailAndPassword(email, password);
  }

  signInWithEmailAndPassword(email: string, password: string): firebase.Promise<any> {
    return this.AngularFA.auth.signInWithEmailAndPassword(email, password).then((userInfo) => {
      this.Router.navigate(['/']);
      return userInfo;
    });
  }

  currentUser() {
    return this.AngularFA.auth.currentUser;
  }

  logOut() {
    this.AngularFA.auth.signOut();
    this.Router.navigate(['/']);
  }

}
