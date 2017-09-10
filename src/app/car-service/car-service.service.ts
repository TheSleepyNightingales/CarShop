import { Observable } from 'rxjs/Observable';
import { Mechanic } from './../shared/models/Mechanic';
import { CarService } from './../shared/models/CarService';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class CarServiceService {

  uid: string;

  carServices: FirebaseListObservable<any[]>;

  myMechanics: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase, private AuthService: AuthService) {
    this.uid = this.AuthService.currentUser().uid;
    this.myMechanics = this.db.list('/users/' + this.uid + '/myMechanics');
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
    // this.myMechanics = this.db.list('/users/' + id + '/myMechanics');
    return this.myMechanics;
  }

  getMyTopMechanics(): Observable<any[]> {
    return this.myMechanics
      .map((mechanics) => mechanics.sort((a, b) => a.rating - b.rating))
      .map((mechanics) => mechanics.splice(0, 3));
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

  updateCarService(carService: CarService) {
    this.db.object('/users/' + carService.id + '/name').set(carService.name);
    this.db.object('/users/' + carService.id + '/owner').set(carService.owner);
    this.db.object('/users/' + carService.id + '/address').set(carService.address);
    this.db.object('/users/' + carService.id + '/activities').set(carService.activities);
  }

  addMechanic(serviceId: string, mechanicId: string, mechanic: any) {
    console.log(mechanic);
    return this.db.list('/users/' + serviceId + '/myMechanics').set(mechanicId, mechanic);
  }
}
