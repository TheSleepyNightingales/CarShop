import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../auth/auth.service';
import { Mechanic } from '../shared/models/Mechanic';

@Injectable()
export class MechanicService {

  users: FirebaseListObservable<any[]>;
  mechanic: FirebaseListObservable<any[]>;
  comments: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase, private AuthService: AuthService) {
    this.users = db.list('users');
    if (this.AuthService.currentUser()) {
      const currentUser = this.AuthService.currentUser().uid;
      this.mechanic = db.list('/users', {
        query: {
          orderByChild: 'id',
          equalTo: this.AuthService.currentUser().uid,
        }
      });
    }
  }

  createMechanic(email: string, password: string) {
    return this.AuthService.createUserWithEmailAndPassword(email, password);
  }

  addMechanic(mechanic: Mechanic) {
    this.users.set(mechanic.id, mechanic);
  }

  addComment(comment: any, id: string) {
    const comments = this.db.list('/users/' + id + '/comments');
    comments.push(comment);
  }

  listComments(id) {
    return this.db.list('/users/' + id + '/comments');
  }

  getCurrentUser(id) {
    return this.db.list('users', {
      query: {
        orderByChild: 'id',
        equalTo: id,
      }
    })
  }
}
