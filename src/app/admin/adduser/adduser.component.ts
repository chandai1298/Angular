import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { UploadService } from "../services/upload.service";
import { HttpEventType, HttpErrorResponse } from "@angular/common/http";
import { map, catchError, finalize } from "rxjs/operators";
import { of, Observable } from "rxjs";
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: "app-adduser",
  templateUrl: "./adduser.component.html",
  styleUrls: ["./adduser.component.scss"],
})
export class AdduserComponent implements OnInit {
  private IsActive: boolean = true;
  fileToUpload: File = null;
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  constructor(private storage: AngularFireStorage,private fileUploadService: UploadService) {}

  ngOnInit() {}

  
  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

}
