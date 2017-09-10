import { Component, OnInit } from '@angular/core';
import { MechanicPubService } from '../mechanic-pub.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { Mechanic } from '../../shared/models/Mechanic';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-mechanic-details',
  templateUrl: './mechanic-details.component.html',
  styleUrls: ['./mechanic-details.component.css']
})
export class MechanicDetailsComponent implements OnInit {

  public detailedService: Mechanic;
  public currentUser: any;
  public currentUid: string;

  constructor(private MechanicPubService: MechanicPubService,
              private ActivatedRoute: ActivatedRoute,
              private AuthService: AuthService) {
  }

  ngOnInit() {
    const currentUser = this.AuthService.currentUser();
    if (currentUser) {
      this.currentUid = currentUser.uid;
      this.MechanicPubService.getMechanicDetails(this.currentUid)
        .subscribe(mechanic => {
          this.currentUser = mechanic;
        });
      console.log('has mechanic');
    } else {
      console.log('no mechanic');
    }

    this.ActivatedRoute.params.subscribe(params => {
      const detailedUserId = params['id'];
      return this.MechanicPubService.getMechanicDetails(detailedUserId)
        .subscribe(mechanic => {
          this.detailedService = mechanic;
        });
    });
  }
}
