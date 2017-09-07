import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { Upload } from '.././upload';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})

export class UploadFormComponent {
  selectedFiles: FileList;
  url: string;
  currentUpload: Upload;
  constructor(private upSvc: UploadService) { }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }
  imgUrl() {
    return this.url = this.upSvc.imgUrl;
  }
  uploadSingle() {
    const file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload);
  }
}
