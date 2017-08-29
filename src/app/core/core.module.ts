import { ServiceService } from './../service/service.service';
import { MechanicService } from './../mechanic/mechanic.service';
import { UserService } from './../user/user.service';
import { UserServicePubService} from '../user/user-service-pub.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  providers: [UserService, UserServicePubService, MechanicService]})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parent: CoreModule)  {
    if (parent) {
      throw new Error('Core module is already provided elsewhere!');
    }
  }
 }
