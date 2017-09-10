import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServicePubService } from '../user-service-pub.service';
import { AuthService } from '../../auth/auth.service';
import { FirebaseListObservable } from 'angularfire2/database';
import {User} from '../../shared/models/User';

@Component({
  selector: 'app-user-public',
  templateUrl: './user-public.component.html',
  styleUrls: ['./user-public.component.css']
})
export class UserPublicComponent implements OnInit {
  public detailedService: User;
  public currentUser: any;

public currentUid: string;
  constructor(private UserPublicService: UserServicePubService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute) {}

  hack(val) {
    const result = Object.keys(val).map(function(key) {
      return [Number(key), val[key]];
    });
    return result;
  }
  ngOnInit() {
    const currentUser = this.authService.currentUser();
    if (currentUser) {
      this.currentUid = currentUser.uid;
      this.UserPublicService.getUserDetails(this.currentUid)
        .subscribe(user => {
          this.currentUser = user;
        });
      console.log('has user');
    } else {
      console.log('no user');
    }

    this.activatedRoute.params.subscribe(params => {
      const detailedUserId = params['id'];
      return this.UserPublicService.getUserDetails(detailedUserId)
        .subscribe(user => {
          this.detailedService = user;
        });
    });
  }
}
