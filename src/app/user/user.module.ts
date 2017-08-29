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
import { UserUploadPhotoComponent } from './user-upload-photo/user-upload-photo.component';

@NgModule({
  imports: [
    NgbModule,
    SharedModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule  // Add this!
  ],

  declarations: [UserDashboardComponent, UserCarComponent, UserCarRepairsComponent, UsersListComponent, UserCreateCarComponent,
UserSignupComponent, UserCarRepairsComponent, UserUploadPhotoComponent],
  providers: []
})
export class UserModule { }
