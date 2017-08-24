import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _router: Router, private authService: AuthService) {  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | Observable<boolean> | boolean {
    if (this.authService.currentUser()) {
      return true;
    } else {
      // not logged in so redirect to login page with the return url
      this._router.navigate(['/signin']);
      return false;
    }
  }
}
