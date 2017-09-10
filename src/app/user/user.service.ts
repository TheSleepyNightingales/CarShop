import { Injectable } from '@angular/core';
import {FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import { AuthService } from '../auth/auth.service';
import { User } from '../shared/models/User';
import { Car } from '../shared/models/Car';
import {Repair} from '../shared/models/Repair';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  user: FirebaseListObservable<any[]>;
  mechanics: FirebaseListObservable<any[]>;
  meme: FirebaseListObservable<any[]>;
  cars: FirebaseListObservable<any[]>;
  repair: FirebaseListObservable<any[]>;
  userImg: FirebaseListObservable<any[]>;
  carReview: FirebaseListObservable<any[]>;
  userByEmail: FirebaseListObservable<any[]>;
  userId: string;
  useroffers: FirebaseListObservable<any[]>;

   // Private services only !
  constructor(private db: AngularFireDatabase, private AuthService: AuthService) {
    this.users = db.list('users');

    if (this.AuthService.currentUser()) {
      this.userId = this.AuthService.currentUser().uid;
      const currentUser = this.AuthService.currentUser().uid;
      this.cars = db.list('/users/' + currentUser + '/mycars');
      this.repair = db.list('/users/');
      this.meme = db.list('/users/' + currentUser + '/mycars');
      this.useroffers = db.list('/users/' + currentUser + '/offers');
      this.userImg = db.list('/users/' + currentUser);
      this.user = db.list('/users', {
        query: {
          orderByChild: 'id',
          equalTo: this.AuthService.currentUser().uid,
        }
      });
    }

    this.mechanics = db.list('/mechanics');
  }

  createUser(email: string, password: string) {
    return this.AuthService.createUserWithEmailAndPassword(email, password);
  }

  addUser(user: User) {
    this.users.set(user.id, user);
  }
  updateUser(user: User) {
    this.users.update(user.id, user);
  }
  addCar(car: Car) {
    this.meme.set(car.licensePlate, car);
  }
  updateCar(car: Car, license: string) {
    this.meme.update(license, car);
  }
  addRepair(repair: Repair, elementId: string, userId: string) {
    console.log(repair);
    console.log(elementId);
    console.log(userId);
    this.repair.set(userId + '/mycars/' + elementId + '/repairs/' + repair.date, repair);
  }
  updatePhoto(photoUrl: string) {
    this.userImg.set('photoUrl', photoUrl);
  }
  updateCarPhoto(car: string, photoUrl: string) {
    this.cars.set(car + '/photoUrl', photoUrl);
  }
  listCars() {
    return this.meme;
  }
  listUser() {
    this.user.forEach( element => {console.log(element); });
    return this.user;
  }

  listOffers() {

    return this.useroffers;
  }
  getCar(id: string, elementId: string) {
    return  this.db.list('/users/' + id + '/mycars/', {
      query: {
        orderByChild: 'licensePlate',
        equalTo: elementId,
      }
    });
  }
  addToServiceGallery(id: string, photoUrl: string) {
    this.db.list('/users/' + id + '/gallery').push(photoUrl);
  }
  isMechanic(id: string) {
    const role = this.db.object('/users/' + id + '/role').toString();
    return role;
  }

    getAll() {
      return this.users;
    }
  }
