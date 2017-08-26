import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase, private AuthService: AuthService) {
    this.items = db.list('/items');
  }

  currentUser() {
    return this.AuthService.currentUser();
  }
}
