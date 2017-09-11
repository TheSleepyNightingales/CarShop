import { CarServiceOffersComponent } from './car-service-offers/car-service-offers.component';
import { AuthGuard } from './../auth/auth-guard.service';
import { CarServiceMechanicsComponent } from './car-service-mechanics/car-service-mechanics.component';
import { CarServiceDetailsComponent } from './car-service-details/car-service-details.component';
import { CarServiceDashboardComponent } from './car-service-dashboard/car-service-dashboard.component';
import { CarServiceSignupComponent } from './car-service-signup/car-service-signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarServicesListComponent } from './car-services-list/car-services-list.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'signup', component: CarServiceSignupComponent},
  { path: 'dashboard', component:  CarServiceDashboardComponent, canActivate: [AuthGuard] },
  { path: 'mechanics', component: CarServiceMechanicsComponent, canActivate: [AuthGuard] },
  { path: 'offers', component: CarServiceOffersComponent, canActivate: [AuthGuard] },
  { path: 'all', component: CarServicesListComponent},
  { path: ':id', component: CarServiceDetailsComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild  (routes)],
    exports: [RouterModule]
})

export class CarServiceRoutingModule { }
