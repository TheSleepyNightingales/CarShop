import { CarService } from './../shared/models/CarService';
import { UserServicePubService } from './../user/user-service-pub.service';
import { CarServicePubService } from './../car-service/car-service-pub.service';
import { MechanicPubService } from './../mechanic/mechanic-pub.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public mechanicsCount: number;
  public carServicesCount: number;
  public usersCount: number;
  public topServices: CarService[];
  user: string;
  isLogged: boolean;
  constructor(db: AngularFireDatabase, private AuthService: AuthService, private mechanicsPub: MechanicPubService,
              private carServicesPub: CarServicePubService, private usersPub: UserServicePubService) {
    const user = this.AuthService.currentUser();
    if (user) {
      this.user = user.email;
      this.isLogged = true;
    }
  }

  ngOnInit() {
    this.mechanicsPub.getAll()
      .subscribe((mechanics) => {
        this.mechanicsCount = mechanics.length;
      });

    this.carServicesPub.getAll()
      .subscribe((carServices) => {
        this.carServicesCount = carServices.length;
      });

    this.usersPub.getAllUsers()
      .subscribe((users) => {
        this.usersCount = users.length;
      });

    this.carServicesPub.getTopServices()
      .subscribe((topServices) => {
        this.topServices = topServices;
      });
  }
}
