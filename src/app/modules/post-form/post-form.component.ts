import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postUrl = 'https://jsonplaceholder.typicode.com/posts';
  postId: number
  currentPost: Post

  constructor(private route: ActivatedRoute, private http: HttpClient) {

  }

  ngOnInit() {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('id is >>' + this.postId);
    if (this.postId) {    // edit
      this.getPostById();
    } else {             //  add
      this.currentPost = new Post;
    }
  }

  getPostById() {
    this.http.get<any>(this.postUrl + '/' + this.postId).subscribe(data => {
      this.currentPost = data;
      console.log('posts is :-' + this.currentPost.body);
    })
  }


  savePost() {
    if (this.postId) {  // edit
      this.http.put(this.postUrl + '/' + this.postId, this.currentPost).subscribe(data => {
       console.log(data); 
       console.log('updated successfully'); 
      })

    } else {            // add
      this.http.post(this.postUrl , this.currentPost).subscribe(data => {
        console.log(data); 
        console.log('added successfully'); 
       })
    }
  }



}
