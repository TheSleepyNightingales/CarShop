import { Mechanic } from './../shared/models/Mechanic';
import { CarService } from './../shared/models/CarService';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class CarServiceService {

  carServices: FirebaseListObservable<any[]>;

  myMechanics: FirebaseListObservable<any>;

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

  getMechanics(id: string): FirebaseListObservable<Mechanic[]> {
    return this.db.list('/users/' + id + '/myMechanics');
  }

  getService(id: string) {
    return  this.db.list('/users', {
      query: {
        orderByChild: 'id',
        equalTo: id,
      }
    });
  }

  updateVoters(id: string, voter: any) {
    this.db.list('/users/' + id + '/voters').set(voter.id, voter.value);
  }

  updateRating(id: string, rating: number) {
    this.db.list('/users/' + id).set('rating', rating);
  }

  addMechanic(serviceId: string, mechanicId: string, mechanic: any) {
    console.log(mechanic);
    return this.db.list('/users/' + serviceId + '/myMechanics').set(mechanicId, mechanic);
  }
}
