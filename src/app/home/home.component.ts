import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  user: string;
  constructor(db: AngularFireDatabase, private AuthService: AuthService) {
    this.items = db.list('/items');
    this.user =  this.AuthService.currentUser().email;
  }

  ngOnInit() {
  }

}
