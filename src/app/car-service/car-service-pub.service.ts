import { AuthService } from './../auth/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { CarService } from '../shared/models/CarService';

@Injectable()
export class CarServicePubService {

  carServices: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase, private AuthService: AuthService) {
    this.carServices = db.list('/users', {
      query: {
        orderByChild: 'role',
        equalTo: 'service'
      }
    });
   }

  createCarService(email: string, password: string) {
    return this.AuthService.createUserWithEmailAndPassword(email, password);
  }

  addCarService(service: CarService) {
    this.carServices.set(service.id, service);
  }

  getAll() {
    return this.carServices;
  }

  getUserDetails(id: string): FirebaseObjectObservable<CarService> {
    return this.db.object('/users/' + id);
  }

  subscribe(serviceId: string, subscriberId: string) {
    this.db.list('/users/' + serviceId + '/myClients').push(subscriberId);
  }

}
