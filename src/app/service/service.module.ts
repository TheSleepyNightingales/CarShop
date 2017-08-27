import { SharedModule } from './../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceRoutingModule } from './service-routing.module';
import { ServiceSignupComponent } from './service-signup/service-signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesListComponent } from './services-list/services-list.component';

@NgModule({
  imports: [
    NgbModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceRoutingModule
  ],
  declarations: [ServiceSignupComponent, ServicesListComponent]
})
export class ServiceModule { }
