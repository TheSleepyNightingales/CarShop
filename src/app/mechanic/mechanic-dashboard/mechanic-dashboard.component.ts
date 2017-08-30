import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from "angularfire2/database";
import { MechanicService } from "../mechanic.service";
import { AuthService } from "../../auth/auth.service";
import { MechanicPubService } from "../mechanic-pub.service";

@Component({
  selector: 'app-mechanic-dashboard',
  templateUrl: './mechanic-dashboard.component.html',
  styleUrls: ['./mechanic-dashboard.component.css']
})
export class MechanicDashboardComponent implements OnInit {

  mechanic: FirebaseListObservable<any>;

  constructor(private MechanicService: MechanicService, private AuthService: AuthService) { }

  ngOnInit() {
    const id = this.AuthService.currentUser().uid;
    this.mechanic = this.MechanicService.getCurrentUser(id);
  }

}
