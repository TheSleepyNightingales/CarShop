import {Component, Input, OnInit} from '@angular/core';
import { UploadService } from '../upload.service';
import { Upload } from '../upload';
import { UserService } from '../../../user/user.service';
import {createUrlResolverWithoutPackagePrefix} from '@angular/compiler';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {
  @Input()
  elementId: string;
  @Input()
  type: string;
  selectedFiles: FileList;
  url: string;
  file: File;
  Type: string;
  currentUpload: Upload;
  constructor(private upSvc: UploadService, private UserService: UserService) {
  }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }
  imgUrl(type: string) {
    if (this.type === 'car') {
        this.setCarPhoto();
    }else if (this.type === 'user') {
        this.setPhoto();
    }
  }
  imgUrlCar() {
    this.setCarPhoto();
  }
  setPhoto() {
    return this.UserService.updatePhoto(this.upSvc.imgUrl);
  }
  setCarPhoto() {
    return this.UserService.updateCarPhoto(this.elementId, this.upSvc.imgUrl);
  }
  uploadSingle() {
    this.file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(this.file);
    this.upSvc.pushUpload(this.currentUpload);
  }
  ngOnInit() {

  }
}

