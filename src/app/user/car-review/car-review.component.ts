import {Component, Input, OnInit} from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { UserServicePubService } from '../user-service-pub.service';
import { AuthService } from '../../auth/auth.service';
import {User} from '../../shared/models/User';

@Component({
  selector: 'app-car-review',
  templateUrl: './car-review.component.html',
  styleUrls: ['./car-review.component.css']
})

export class CarReviewComponent implements OnInit {
  result: number;
  public detailedService: User;
  public currentUser: any;

  elementId: string;
  userId: string;
  users: FirebaseListObservable<any[]>;
  constructor(private UserService: UserService, private UserPublicService: UserServicePubService,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute) { }

  hack(val) {
    const result = Object.keys(val).map(function(key) {
      return [Number(key), val[key]];
    });
    return result;
  }
  getCar() {
    this.UserService.getCar(this.userId, this.elementId);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.elementId = params['licensePlate'];
    });
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];
    });
    this.users = this.UserService.getCar(this.userId, this.elementId);
    console.log(this.users.$ref.toString());
  }
}
