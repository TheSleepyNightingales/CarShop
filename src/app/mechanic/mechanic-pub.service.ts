import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { AuthService } from "../auth/auth.service";
import { Mechanic } from "../shared/models/Mechanic";

@Injectable()
export class MechanicPubService {

  users: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase, private AuthService: AuthService) {
    this.users = db.list('/users', {
      query: {
        orderByChild: 'role',
        equalTo: 'mechanic',
      }
    });
  }

  createMechanic(email: string, password: string) {
    return this.AuthService.createUserWithEmailAndPassword(email, password);
  }

  addMechanic(mechanic: Mechanic) {
    this.users.set(mechanic.id, mechanic);
  }

  getAll() {
    return this.users;
  }
}
