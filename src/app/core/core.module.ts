import { CarServicePubService } from './../car-service/car-service-pub.service';
import { CarServiceService } from '../car-service/car-service.service';
import { MechanicService } from '../mechanic/mechanic.service';
import { UserService } from '../user/user.service';
import { UserServicePubService } from '../user/user-service-pub.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MechanicPubService } from '../mechanic/mechanic-pub.service';
import { UploadService } from '../shared/upload/upload.service';

@NgModule({
  providers: [UserService, UserServicePubService, MechanicService,
    UploadService, CarServiceService, MechanicPubService, CarServicePubService]
})

export class CoreModule {

  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('Core module is already provided elsewhere!');
    }
  }
}
