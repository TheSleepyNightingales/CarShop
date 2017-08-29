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

  constructor(private MechanicPubService : MechanicPubService) { }

  ngOnInit() {
    this.users = this.MechanicPubService.getAll()
  }

}
