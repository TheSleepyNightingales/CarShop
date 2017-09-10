import {Component, Input, OnInit} from '@angular/core';
import { UploadService } from '../upload.service';
import { Upload } from '../upload';
import { UserService } from '../../../user/user.service';
import { MechanicService } from '../../../mechanic/mechanic.service';

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
  constructor(private upSvc: UploadService, private UserService: UserService,
  private MechanicService: MechanicService) {
  }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }
  imgUrl(type: string) {
    if (this.type === 'car') {
        this.setCarPhoto();
    } else if (this.type === 'user') {
        this.setPhoto();
    } else if (this.type === 'service') {
        this.addServicePhoto();
    } else if (this.type === 'mechanic') {
      this.setMechanicPhoto();
    }
  }
  imgUrlCar() {
    this.setCarPhoto();
  }
  setPhoto() {
    return this.upSvc.uploadTask.then(() => this.UserService.updatePhoto(this.upSvc.imgUrl));
  }

  setMechanicPhoto() {
    return this.upSvc.uploadTask.then(() => this.MechanicService.updatePhoto(this.upSvc.imgUrl));
  }
  setCarPhoto() {
    return this.upSvc.uploadTask.then(() => this.UserService.updateCarPhoto(this.elementId, this.upSvc.imgUrl));
  }

  addServicePhoto() {
    return this.upSvc.uploadTask.then(() => this.UserService.addToServiceGallery(this.elementId, this.upSvc.imgUrl));
  }

  uploadSingle() {
    this.file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(this.file);
    this.upSvc.pushUpload(this.currentUpload);
    this.imgUrl(this.type);
  }
  ngOnInit() {
  }
}
