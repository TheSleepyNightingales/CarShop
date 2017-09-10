import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserCarComponent } from './user-car/user-car.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserCreateCarComponent } from './user-create-car/user-create-car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCarRepairsComponent } from './user-car-repairs/user-car-repairs.component';
import { UserPublicComponent } from './user-public/user-public.component';
import { CarReviewComponent } from './car-review/car-review.component';
import { AddRepairComponent } from './add-repair/add-repair.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { CarEditComponent } from './car-edit/car-edit.component';

@NgModule({
  imports: [
    NgbModule,
    SharedModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule  // Add this!
  ],

  declarations: [UserDashboardComponent, UserCarComponent, UserCarRepairsComponent, UsersListComponent, UserCreateCarComponent,
UserSignupComponent, UserCarRepairsComponent, UserPublicComponent, CarReviewComponent, AddRepairComponent, UserUpdateComponent,
CarEditComponent],
  providers: []
})
export class UserModule { }
