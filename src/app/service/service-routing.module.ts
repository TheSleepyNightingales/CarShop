import { ServiceDashboardComponent } from './service-dashboard/service-dashboard.component';
import { ServiceSignupComponent } from './service-signup/service-signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesListComponent } from './services-list/services-list.component';
import { AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'signup', component: ServiceSignupComponent},
  { path: 'dashboard', component:  ServiceDashboardComponent, canActivate: [AuthGuard]} ,
  { path: 'all', component: ServicesListComponent}
];

@NgModule({
    imports: [RouterModule.forChild  (routes)],
    exports: [RouterModule]
})

export class ServiceRoutingModule { }
