import { SharedModule } from './../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarServiceRoutingModule } from './car-service-routing.module';
import { CarServiceSignupComponent } from './car-service-signup/car-service-signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarServicesListComponent } from './car-services-list/car-services-list.component';
import { CarServiceDashboardComponent } from './car-service-dashboard/car-service-dashboard.component';

@NgModule({
  imports: [
    NgbModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CarServiceRoutingModule
  ],
  declarations: [CarServiceSignupComponent, CarServicesListComponent, CarServiceDashboardComponent]
})
export class CarServiceModule { }
