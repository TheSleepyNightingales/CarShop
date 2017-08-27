import { ServiceSignupComponent } from './service-signup/service-signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesListComponent } from './services-list/services-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'signup', component: ServiceSignupComponent},
//   { path: 'dashboard', component:  UserDashboardComponent, canActivate: [AuthGuard]} ,
//   { path: 'dashboard/register-car', component:  UserCreateCarComponent, canActivate: [AuthGuard]} ,
  { path: 'all', component: ServicesListComponent}
];

@NgModule({
    imports: [RouterModule.forChild  (routes)],
    exports: [RouterModule]
})

export class ServiceRoutingModule { }
