import { SharedModule } from './../shared/shared.module';
import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [UsersListComponent],
  providers: []
})
export class UserModule { }
