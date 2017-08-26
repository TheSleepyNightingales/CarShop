import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MechanicRoutingModule } from './mechanic-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MechanicsListComponent } from './mechanics-list/mechanics-list.component';
import { MechanicSignupComponent } from './mechanic-signup/mechanic-signup.component';

@NgModule({
  imports: [
    NgbModule,
    SharedModule,
    MechanicRoutingModule,
    FormsModule,
  ],
  declarations: [MechanicsListComponent, MechanicSignupComponent],
  providers: []
})
export class MechanicModule { }
