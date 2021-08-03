import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments = [] ;
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol' , 'edit']; 
  

  commentUrl='https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }
  

  ngOnInit() { 

      this.getcomments();

  }
  getcomments (){

    this.http.get<any>(this.commentUrl).subscribe( data  => {
      
      this.comments= data ;
      console.log('comments is :-' + this.comments);
    })

  }

}
