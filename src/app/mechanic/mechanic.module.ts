import { MechanicRoutingModule } from './mechanic-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MechanicsListComponent } from './mechanics-list/mechanics-list.component';

@NgModule({
  imports: [
    SharedModule,
    MechanicRoutingModule
  ],
  declarations: [MechanicsListComponent],
  providers: []
})
export class MechanicModule { }
