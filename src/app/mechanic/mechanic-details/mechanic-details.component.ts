import { Component, OnInit } from '@angular/core';
import { MechanicPubService } from "../mechanic-pub.service";
import { FirebaseListObservable } from "angularfire2/database";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-mechanic-details',
  templateUrl: './mechanic-details.component.html',
  styleUrls: ['./mechanic-details.component.css']
})
export class MechanicDetailsComponent implements OnInit {

  users: FirebaseListObservable<any>;

  constructor(private MechanicService: MechanicPubService,
  private ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.ActivatedRoute.snapshot.params['id'];
    this.users = this.MechanicService.getById(id);
  }
}
