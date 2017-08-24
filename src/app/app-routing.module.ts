import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MechanicComponent } from './mechanic/mechanic.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path: 'mechanic',
    component: MechanicComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: '',
    component: HomeComponent, canActivate: [AuthGuard]
  },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
