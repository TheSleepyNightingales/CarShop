import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from './../../auth/auth.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-user-car',
  templateUrl: './user-car.component.html',
  styleUrls: ['./user-car.component.css']
})
export class UserCarComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  constructor(private UserService: UserService, private AuthService: AuthService) { }

  currentUser() {
    return this.AuthService.currentUser();
  }

  ngOnInit() {
    this.users = this.UserService.listCars();
  }
}
