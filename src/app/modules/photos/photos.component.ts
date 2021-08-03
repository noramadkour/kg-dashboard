import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
photos = [];
displayedColumns: string[] = ['position', 'name', 'weight', 'symbol' , 'edit'];
photosUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }
  


  ngOnInit() {
    this.getphotos();

    }
    getphotos (){
    

      this.http.get<any>(this.photosUrl).subscribe( data  => {
        
        this.photos = data ;
        // console.log('users is :-' + this.photos);
      })
    }
  }
   
  