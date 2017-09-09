import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from '../auth/auth.service';
import { User } from '../shared/models/User';

@Injectable()
export class UserServicePubService {
  users: FirebaseListObservable<any[]>;
  user: FirebaseListObservable<any[]>;
  mechanics: FirebaseListObservable<any[]>;

 // This is the Public Service
  constructor(private db: AngularFireDatabase, private AuthService: AuthService) {
    this.users = db.list('/users', {
      query: {
        orderByChild: 'role',
        equalTo: 'user',
      }
    });
    this.user = db.list('/users', {
      query: {
        orderByChild: 'id',
        equalTo: this.AuthService.currentUser().uid,
      }
    });
    this.mechanics = db.list('/mechanics');
  }

  createCarService(email: string, password: string) {
    return this.AuthService.createUserWithEmailAndPassword(email, password);
  }

  addCarService(service: User) {
    this.user.set(service.id, service);
  }

  getAll() {
    const uid = this.AuthService.currentUser().uid;
    return this.db.list('/users/' + uid);
  }

  getUserDetails(id: string): FirebaseObjectObservable<User> {
    return this.db.object('/users/' + id);
  }

  getService(id: string) {
    return  this.db.list('/users', {
      query: {
        orderByChild: 'id',
        equalTo: id,
      }
    });
  }

  // updateVoters(id: string, voters: Array<any>) {
  //   this.db.list('/users/' + id).set('voters', voters);
  // }

  updateRating(id: string, rating: number) {
    this.db.list('/users/' + id).set('rating', rating);
  }
  createUser(email: string, password: string) {
    return this.AuthService.createUserWithEmailAndPassword(email, password);
  }
  addUser(user: User) {
    this.users.set(user.id, user);
  }
  getAllUsers() {
    return this.users;
  }
  listUser() {
    this.user.forEach( element => {console.log(element); });
    return this.user;
  }
}

