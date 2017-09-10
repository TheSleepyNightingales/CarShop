import { CarServiceService } from './../car-service.service';
import { CarServicePubService } from './../car-service-pub.service';
import { CarService } from './../../shared/models/CarService';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
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

  public mechanicsCount: number;

  public repairsCount: number;

  public isLogged: boolean;

  public isClient: boolean;

  public hasSubscribed: boolean;

  public galleryImages: any[];

  constructor(private CarServiceService: CarServicePubService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute) {

    }

  ngOnInit() {
    const currentUser = this.authService.currentUser();
    console.log(currentUser);
    if (currentUser) {
      this.currentUid = currentUser.uid;
      this.CarServiceService.getUserDetails(this.currentUid)
        .subscribe(user => {
          this.currentUser = user;
          this.isLogged = true;
          if (this.currentUser.role === 'user') {
            this.isClient = true;
          }
        });
    } else {
      console.log('no user');
      this.isLogged = false;
    }

    this.activatedRoute.params.subscribe(params => {
      const detailedUserId = params['id'];
      return this.CarServiceService.getUserDetails(detailedUserId)
        .subscribe(user => {
          this.detailedService = user;
          if (this.detailedService.myMechanics) {
            this.mechanicsCount = Object.keys(this.detailedService.myMechanics).length;
          } else {
            this.mechanicsCount = 0;
          }

          if (this.detailedService.myRepairs) {
            this.repairsCount = Object.keys(this.detailedService.myRepairs).length;
          } else {
            this.repairsCount = 0;
          }

          if (this.detailedService.myClients && Object.values(this.detailedService.myClients).includes(this.currentUid)) {
            this.hasSubscribed = true;
          }

          if (this.detailedService.gallery) {
            this.galleryImages = Object.values(this.detailedService.gallery);
          }
        });
    });
  }

  subscribe(serviceId: string) {
    const subscriberId = this.currentUid;
    this.CarServiceService.subscribe(serviceId, subscriberId);
  }

}
