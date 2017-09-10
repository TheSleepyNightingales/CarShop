import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { DateFormatPipe } from './date-format/date-format.pipe';
import { StarRatingComponent } from './star-rating/star-rating.component';
import {UploadFormComponent} from './upload/upload-form/upload-form.component';
import { GalleryComponent } from './gallery/gallery.component';
import { IterablePipe } from './iterable/iterable.pipe';
import { TimeAgoPipe } from 'time-ago-pipe';
import { CommentsComponent } from './comments/comments.component';

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
    GalleryComponent,
    IterablePipe,
    TimeAgoPipe,
    CommentsComponent
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    AsideComponent,
    MainComponent,
    DateFormatPipe,
    StarRatingComponent,
    UploadFormComponent,
    GalleryComponent,
    IterablePipe,
    TimeAgoPipe
  ]
})
export class SharedModule { }
