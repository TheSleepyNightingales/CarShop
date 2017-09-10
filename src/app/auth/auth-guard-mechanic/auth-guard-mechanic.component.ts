import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {UserService} from '../../user/user.service';

@Injectable()
export class AuthGuardMechanic implements CanActivate {

  constructor(private UserService: UserService, private _router: Router, private authService: AuthService) {  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | Observable<boolean> | boolean {
    if (this.authService.currentUser()) {
      const id = this.authService.currentUser().uid;
      if (this.UserService.isMechanic(id) === 'mechanic') {
        console.log('Mechanic');
        return true;
      } else {
        this._router.navigate(['/mechanics/signup']);
        return false;
      }
    } else {
      console.log('not logged');
      // not logged in so redirect to login page with the return url
      this._router.navigate(['/signin']);
      return false;
    }
  }
}
