import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Comment } from 'src/app/models/Comment';

@Component({
  selector: 'app-comment-from',
  templateUrl: './comment-from.component.html',
  styleUrls: ['./comment-from.component.scss']
})
export class CommentFromComponent implements OnInit {
 
  commentUrl='https://jsonplaceholder.typicode.com/comments';

  commentId: number
  currentcomment: Comment
  
  constructor(private route: ActivatedRoute, private http: HttpClient) {

  }

  ngOnInit() {
    this.commentId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('id is >>' + this.commentId);
    if (this.commentId) {    // edit
      this.getcommentById();
    } else {             //  add
      this.currentcomment = new Comment;
    }
  }
  getcommentById() {
    this.http.get<any>(this.commentUrl + '/' + this.commentId).subscribe(data => {
      this.currentcomment = data;
      console.log('posts is :-' + this.currentcomment.body);
    })
  }
  
  



  savecomment() {
    if (this.commentId) {  // edit
      this.http.put(this.commentUrl + '/' + this.commentId, this.currentcomment).subscribe(data => {
       console.log(data); 
       console.log('updated successfully'); 
      })

    } else {            // add
      this.http.post(this.commentUrl , this.currentcomment).subscribe(data => {
        console.log(data); 
        console.log('added successfully'); 
       })
    }
  }



}