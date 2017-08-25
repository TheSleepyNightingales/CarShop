import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from './../../auth/auth.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  users: FirebaseListObservable<any[]>;
  constructor(private UserService: UserService, private AuthService: AuthService) { }

  currentUser() {
    return this.AuthService.currentUser();
  }

  ngOnInit() {
    this.users = this.UserService.listUser('meninblack@gmail.com');
  }
}
