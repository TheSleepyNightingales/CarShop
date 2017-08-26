import { UserServicePubService } from './../user-service-pub.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: FirebaseListObservable<any>;

  constructor(private UserService: UserServicePubService) { }

  ngOnInit() {
    this.users = this.UserService.getAll();
  }

}
