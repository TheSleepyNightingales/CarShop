import { UserService } from './../user.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: FirebaseListObservable<any>;

  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.users = this.UserService.getAll();
  }

}
