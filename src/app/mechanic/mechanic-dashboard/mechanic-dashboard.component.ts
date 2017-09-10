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
  type: string;
  hover: boolean;
  elementId: string;
  isVisible: false;

  constructor(private MechanicService: MechanicService, private AuthService: AuthService) {
    this.elementId = this.currentUser().uid;
    this.type = 'mechanic';
  }

  currentUser() {
    return this.AuthService.currentUser();
  }

  myEvent($event) {
    this.hover = true;
  }
  myEventOut($event) {
    this.hover = false;
  }

  ngOnInit() {
    const id = this.AuthService.currentUser().uid;
    this.mechanic = this.MechanicService.getCurrentUser(id);
  }

}
