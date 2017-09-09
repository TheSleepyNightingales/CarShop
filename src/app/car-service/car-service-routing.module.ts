import { CarServiceDetailsComponent } from './car-service-details/car-service-details.component';
import { CarServiceDashboardComponent } from './car-service-dashboard/car-service-dashboard.component';
import { CarServiceSignupComponent } from './car-service-signup/car-service-signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarServicesListComponent } from './car-services-list/car-services-list.component';
import { AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'signup', component: CarServiceSignupComponent},
  { path: 'dashboard', component:  CarServiceDashboardComponent, canActivate: [AuthGuard] } ,
  { path: 'all', component: CarServicesListComponent},
  { path: ':id', component: CarServiceDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forChild  (routes)],
    exports: [RouterModule]
})

export class CarServiceRoutingModule { }
