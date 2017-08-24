import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class MechanicService {

  users: FirebaseListObservable<any[]>;

  mechanics: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase, private AuthService: AuthService) {
    this.users = db.list('/users');
    this.mechanics = db.list('/mechanics');
  }
}
