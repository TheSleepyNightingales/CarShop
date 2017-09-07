import { CarService } from './../shared/models/CarService';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class CarServiceService {

  carServices: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase, private AuthService: AuthService) {
    this.carServices = db.list('services');
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

  getService(id: string) {
    return  this.db.list('services', {
      query: {
        orderByChild: 'id',
        equalTo: id,
      }
    });
  }

}
