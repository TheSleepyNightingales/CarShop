import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../auth/auth.service';
import { User } from '../shared/models/User';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  mechanics: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase, private AuthService: AuthService) {
    this.users = db.list('/users');
    this.mechanics = db.list('/mechanics');
  }

  createUser(email: string, password: string) {
    return this.AuthService.createUserWithEmailAndPassword(email, password);
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
