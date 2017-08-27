import { ServiceService } from './../service.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {

  carServices: FirebaseListObservable<any>;

  constructor(private CarServiceService: ServiceService) { }

  ngOnInit() {
    this.carServices = this.CarServiceService.getAll();
  }

}
