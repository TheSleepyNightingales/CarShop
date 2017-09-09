import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { User } from './../models/User';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

import 'rxjs/Rx';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase, private AuthService: AuthService) {
  }

  logOut() {
    this.AuthService.logOut();
  }
  currentUser() {
    return this.AuthService.currentUser();
  }

  getUserRole() {
    const uid = this.currentUser().uid.toString();
    this.user = this.db.object('/users/' + uid);
    let role = '';
    this.user.subscribe(u => {
      role = u.role;
    });

    return role;
  }

  ngOnInit() {
  }
}
