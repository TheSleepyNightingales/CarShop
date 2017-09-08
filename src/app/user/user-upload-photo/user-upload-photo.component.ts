import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../shared/upload/upload.service';
import { Upload } from '../../shared/upload/upload';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-upload-photo',
  templateUrl: './user-upload-photo.component.html',
  styleUrls: ['./user-upload-photo.component.css']
})
export class UserUploadPhotoComponent {
  selectedFiles: FileList;
  url: string;
  currentUpload: Upload;
  constructor(private upSvc: UploadService, private UserService: UserService) { }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }
  imgUrl() {
    this.setPhoto();
  }
  setPhoto() {
    return this.UserService.updatePhoto(this.upSvc.imgUrl);
  }
  uploadSingle() {
    const file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload);
  }
}

