import { UsersListComponent } from './users-list/users-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [

  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'dashboard', component:  UserDashboardComponent},
  {path: '', redirectTo: 'all', pathMatch: 'full'},
  {path: 'all', component: UsersListComponent}
];

@NgModule({
    imports: [RouterModule.forChild  (routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }
