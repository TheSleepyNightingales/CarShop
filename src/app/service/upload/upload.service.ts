import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase} from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import { Upload } from './upload';
import 'firebase/storage';

@Injectable()
export class UploadService {
  constructor(private db: AngularFireDatabase) { }
  imgUrl: string;
  private basePath = '/uploads';
  private uploadTask: firebase.storage.UploadTask;
  upload: FirebaseListObservable<Upload[]>;
  pushUpload(upload: Upload) {
    const storageRef = firebase.storage().ref();
    this.uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        upload.progress = (this.uploadTask.snapshot.bytesTransferred / this.uploadTask.snapshot.totalBytes) * 100;
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        upload.url = this.uploadTask.snapshot.downloadURL;
        this.imgUrl = this.uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload);
      }
    );
  }
  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }}
