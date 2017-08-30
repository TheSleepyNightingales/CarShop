import { Component, OnInit } from '@angular/core';
import { MechanicPubService } from "../mechanic-pub.service";
import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'app-mechanics-list',
  templateUrl: './mechanics-list.component.html',
  styleUrls: ['./mechanics-list.component.css']
})
export class MechanicsListComponent implements OnInit {

  users: FirebaseListObservable<any>;

  constructor(private MechanicService : MechanicPubService) {

  }

  ngOnInit() {
    this.users = this.MechanicService.getAll();
  }
}
