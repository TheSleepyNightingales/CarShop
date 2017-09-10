import {FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-offers',
  templateUrl: './user-offers.component.html',
  styleUrls: ['./user-offers.component.css']
})
export class UserOffersComponent implements OnInit {
  users: FirebaseListObservable<any[]>;

  constructor(private UserService: UserService) { }
  hack(val) {
    const result = Object.keys(val).map(function(key) {
      return [Number(key), val[key]];
    });
    return result;
  }
  ngOnInit() {
    this.users = this.UserService.listOffers();
  }
}
