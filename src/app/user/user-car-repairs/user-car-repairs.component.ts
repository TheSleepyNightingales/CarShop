import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-user-car-repairs',
  templateUrl: './user-car-repairs.component.html',
  styleUrls: ['./user-car-repairs.component.css']
})
export class UserCarRepairsComponent implements OnInit {
  result: number;
  users: FirebaseListObservable<any[]>;
  constructor(private UserService: UserService) {
    this.result = 0;
  }

  hack(val) {

    const result = Object.keys(val).map(function(key) {
      return [Number(key), val[key]];
    });

    return result;
  }
  repairsCost(val) {
    const result = Object.keys(val.repair).map(function(key) {
      return [Number(key), val.repair[key]];
    });
    let totalPrice = 0;
    result.forEach( element => {totalPrice = totalPrice + element[1].price; } );
    return totalPrice;
  }
  returnCost() {
    return this.result;
  }
  ngOnInit() {
    this.users = this.UserService.listCars();
  }
}
