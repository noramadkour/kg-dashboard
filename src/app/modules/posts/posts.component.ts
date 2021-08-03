import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts = [] ;
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = this.posts;

  postUrl = 'https://jsonplaceholder.typicode.com/posts';

  

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.getPosts();
  }

  getPosts (){
    this.http.get<any>(this.postUrl).subscribe( data  => {
      this.posts = data ;
    })

  }

}
