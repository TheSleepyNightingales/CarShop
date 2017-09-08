import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  userId: string;
  wantedUser: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase, private AuthService: AuthService) {
    this.userId = this.AuthService.currentUser().uid.toString();

    this.wantedUser = db.list('/users', {
      query: {
        orderByChild: 'id',
        equalTo: this.userId,
      }
    });
  }
  myUser() {
    return this.wantedUser;
  }
  ngOnInit() {
  }
}
