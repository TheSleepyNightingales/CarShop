import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { DateFormatPipe } from './date-format/date-format.pipe';
import { StarRatingComponent } from './star-rating/star-rating.component';
import {UploadFormComponent} from './upload/upload-form/upload-form.component';
import { TimeAgoPipe } from "time-ago-pipe";

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [
    HeaderComponent,
    AsideComponent,
    MainComponent,
    DateFormatPipe,
    StarRatingComponent,
    UploadFormComponent,
    TimeAgoPipe,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    AsideComponent,
    MainComponent,
    DateFormatPipe,
    StarRatingComponent,
    UploadFormComponent,
    TimeAgoPipe
  ]
})
export class SharedModule { }
