import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../auth/auth.service';
import { User } from '../shared/models/User';

@Injectable()
export class UserServicePubService {
  users: FirebaseListObservable<any[]>;
  mechanics: FirebaseListObservable<any[]>;

 // This is the Public Service
  constructor(db: AngularFireDatabase, private AuthService: AuthService) {
    this.users = db.list('/users', {
      query: {
        orderByChild: 'role',
        equalTo: 'user',
      }
    });
    this.mechanics = db.list('/mechanics');
  }

  createUser(email: string, password: string) {
    return this.AuthService.createUserWithEmailAndPassword(email, password);
  }
  addUser(user: User) {
    this.users.set(user.id, user);
  }
  getAll() {
    return this.users;
  }
}

