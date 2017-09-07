import { MechanicSignupComponent } from './mechanic-signup/mechanic-signup.component';
import { MechanicsListComponent } from './mechanics-list/mechanics-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MechanicDashboardComponent } from "./mechanic-dashboard/mechanic-dashboard.component";
import { AuthGuard } from "../auth/auth-guard.service";
import { MechanicDetailsComponent } from "./mechanic-details/mechanic-details.component";
import { MechanicCommentsComponent } from "./mechanic-comments/mechanic-comments.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'all', pathMatch: 'full'
  },
  {
    path: 'signup', component: MechanicSignupComponent
  },
  {
    path: 'dashboard', component: MechanicDashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'all', component: MechanicsListComponent
  },
  {
    path: ':id', component: MechanicDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MechanicRoutingModule {
}
