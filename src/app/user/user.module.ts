import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserCarComponent } from './user-car/user-car.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule,
    // FormsModule
  ],

  declarations: [UserDashboardComponent, UserCarComponent, UsersListComponent, UserSignupComponent],

  providers: []
})
export class UserModule { }
