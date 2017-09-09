import { CarService } from './../../shared/models/CarService';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../car-service.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-car-service-details',
  templateUrl: './car-service-details.component.html',
  styleUrls: ['./car-service-details.component.css']
})
export class CarServiceDetailsComponent implements OnInit {
  public detailedService: CarService;
  public currentUser: any;

  public currentUid: string;
  constructor(private CarServiceService: CarServiceService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute) {

    }

  ngOnInit() {
    const currentUser = this.authService.currentUser();
    if (currentUser) {
      this.currentUid = currentUser.uid;
      this.CarServiceService.getUserDetails(this.currentUid)
        .subscribe(user => {
          this.currentUser = user;
        });
      console.log('has user');
    } else {
      console.log('no user');
    }

    this.activatedRoute.params.subscribe(params => {
      const detailedUserId = params['id'];
      return this.CarServiceService.getUserDetails(detailedUserId)
        .subscribe(user => {
          this.detailedService = user;
        });
    });
  }

}
