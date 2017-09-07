import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MechanicRoutingModule } from './mechanic-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { MechanicsListComponent } from './mechanics-list/mechanics-list.component';
import { MechanicSignupComponent } from './mechanic-signup/mechanic-signup.component';
import { MechanicDashboardComponent } from './mechanic-dashboard/mechanic-dashboard.component';
import { MechanicDetailsComponent } from './mechanic-details/mechanic-details.component';
import { MechanicCommentsComponent } from './mechanic-comments/mechanic-comments.component';

@NgModule({
  imports: [
    NgbModule,
    SharedModule,
    MechanicRoutingModule,
    FormsModule,
  ],
  declarations: [
    MechanicsListComponent,
    MechanicSignupComponent,
    MechanicDashboardComponent,
    MechanicDetailsComponent,
    MechanicCommentsComponent]
})
export class MechanicModule { }
