import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { DateFormatPipe } from './date-format/date-format.pipe';
import {UploadFormComponent} from './upload/upload-form/upload-form.component';

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
    UploadFormComponent
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    AsideComponent,
    MainComponent,
    DateFormatPipe,
    UploadFormComponent
  ]
})
export class SharedModule { }
