import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { photo } from 'src/app/models/photo';


@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {
  photosUrl = 'https://jsonplaceholder.typicode.com/photos';

  photoId: number
  currentphoto: photo
  constructor(private route: ActivatedRoute, private http: HttpClient) {
      }



      ngOnInit() {
        this.photoId = Number(this.route.snapshot.paramMap.get('id'));
        console.log('id is >>' + this.photoId);
        if (this.photoId) {    // edit
          this.getPhotoById();
        } else {             //  add
          this.currentphoto = new photo;
      }
    
    }


    getPhotoById() {
      this.http.get<any>(this.photosUrl + '/' + this.photoId).subscribe(data => {
        this.currentphoto = data;
      })
    }
    
      
    
    
    
    saveUser() {
      if (this.photoId) {  // edit
        this.http.put(this.photosUrl + '/' + this.photoId, this.currentphoto).subscribe(data => {
         console.log(data); 
         console.log('updated successfully'); 
        })
    
      } else {            // add
        this.http.post(this.photosUrl , this.currentphoto).subscribe(data => {
          console.log(data); 
          console.log('added successfully'); 
         })
      }
    }
    }
    