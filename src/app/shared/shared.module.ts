import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { DateFormatPipe } from './date-format/date-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [
    HeaderComponent,
    AsideComponent,
    MainComponent,
    DateFormatPipe
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    AsideComponent,
    MainComponent,
    DateFormatPipe
  ]
})
export class SharedModule { }
