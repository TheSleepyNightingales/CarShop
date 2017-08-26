import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AuthGuard } from '.././auth/auth-guard.service';
import {UserCreateCarComponent} from './user-create-car/user-create-car.component';

const routes: Routes = [

  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'dashboard', component:  UserDashboardComponent, canActivate: [AuthGuard]} ,
  { path: 'dashboard/register-car', component:  UserCreateCarComponent, canActivate: [AuthGuard]} ,
  { path: 'all', component: UsersListComponent}
];

@NgModule({
    imports: [RouterModule.forChild  (routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }
