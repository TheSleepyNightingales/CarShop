import { SharedModule } from './../shared/shared.module';
import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [],
  providers: []
})
export class UserModule { }
