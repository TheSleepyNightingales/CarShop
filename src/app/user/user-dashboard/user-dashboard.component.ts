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
  elementId: string;
  type: string;
  hover: boolean;
  isVisible: false;
  users: FirebaseListObservable<any[]>;
  constructor(private UserService: UserService, private AuthService: AuthService) {
    this.elementId = this.currentUser().uid;
    this.type = 'user';
  }
  myEvent($event) {
    this.hover = true;
  }
  myEventOut($event) {
    this.hover = false;
  }
  currentUser() {
    return this.AuthService.currentUser();
  }
  showUpload(val) {
    this.isVisible = val;
    return this.isVisible;
  }
  ngOnInit() {
    this.users = this.UserService.listUser();
  }
}
