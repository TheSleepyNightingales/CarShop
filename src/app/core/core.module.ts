import { MechanicService } from './../mechanic/mechanic.service';
import { UserService } from './../user/user.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  providers: [UserService, MechanicService]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parent: CoreModule)  {
    if (parent) {
      throw new Error('Core module is already provided elsewhere!');
    }
  }
 }
