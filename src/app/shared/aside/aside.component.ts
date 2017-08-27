import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';

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

    // TODO - think of clever implementation
    this.wantedUser = db.list('/users', {
      query: {
        orderByChild: 'id',
        equalTo: this.userId,
      }
    });

    this.wantedUser.subscribe(snapshot => {
      if (snapshot.length === 0) {
        this.wantedUser = db.list('/mechanics', {
          query: {
            orderByChild: 'id',
            equalTo: this.userId,
          }
        });

        this.wantedUser.subscribe((mechanicSnapshot) => {
          if (snapshot.length === 0) {
            this.wantedUser = db.list('/services', {
              query: {
                orderByChild: 'id',
                equalTo: this.userId,
              }
            });
          }
        });
      }
    });

    console.log(this.wantedUser);
  }

  myUser() {
    return this.wantedUser;
  }
  ngOnInit() {
  }

}
