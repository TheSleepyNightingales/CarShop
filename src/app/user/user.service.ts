import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../auth/auth.service';
import { User } from '../shared/models/User';
import { Car } from '../shared/models/Car';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  user: FirebaseListObservable<any[]>;
  mechanics: FirebaseListObservable<any[]>;
  meme: FirebaseListObservable<any[]>;
  userByEmail: FirebaseListObservable<any[]>;

   // Private services only !
  constructor(db: AngularFireDatabase, private AuthService: AuthService) {
    this.users = db.list('users');
    if (this.AuthService.currentUser()) {
      const currentUser = this.AuthService.currentUser().uid;
      this.meme = db.list('/users/' + currentUser + '/mycars');
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
  addCar(car: Car) {
    this.meme.set(car.make, car);
  }
  listCars() {
    return this.meme;
  }
  listUser(email: string) {
    this.user.forEach( element => {console.log(element); });
    return this.user;
  }
    getAll() {
      return this.users;
    }
  }
