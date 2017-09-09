import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: string;

  isLogged: boolean;
  constructor(db: AngularFireDatabase, private AuthService: AuthService) {
    const user = this.AuthService.currentUser();
    if (user) {
      this.user = user.email;
      this.isLogged = true;
    }
  }

  ngOnInit() {
  }

}
