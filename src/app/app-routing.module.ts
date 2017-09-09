import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { UploadFormComponent } from './shared/upload/upload-form/upload-form.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'mechanics',
    loadChildren: './mechanic/mechanic.module#MechanicModule'
  },
  {
    path: 'users',
    loadChildren: './user/user.module#UserModule'
  },
  { path: 'upload', component:  UploadFormComponent } ,
  {
    path: 'services',
    loadChildren: './car-service/car-service.module#CarServiceModule'
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
