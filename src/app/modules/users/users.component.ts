import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [] ;
  displayedColumns: string[] = ['position', 'name', 'weight' , 'suite' , 'city' , 'zipcode', 'symbol'];
  usersUrl ='https://jsonplaceholder.typicode.com/users' 

  constructor(private http: HttpClient) { }
  

  ngOnInit() {
    this.getusers();

  }
  getusers (){
    

    this.http.get<any>(this.usersUrl).subscribe( data  => {
      
      this.users = data ;
      console.log('users is :-' + this.users);
    })
  }
}
