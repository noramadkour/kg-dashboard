import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User';





@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  usersUrl ='https://jsonplaceholder.typicode.com/users' ;
  userId: number
  currentUser: User


  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('id is >>' + this.userId);
    if (this.userId) {    // edit
      this.getUserById();
    } else {             //  add
      this.currentUser = new User;
  }

}

getUserById() {
  this.http.get<any>(this.usersUrl + '/' + this.userId).subscribe(data => {
    this.currentUser = data;
  })
}

  



saveUser() {
  if (this.userId) {  // edit
    this.http.put(this.usersUrl + '/' + this.userId, this.currentUser).subscribe(data => {
     console.log(data); 
     console.log('updated successfully'); 
    })

  } else {            // add
    this.http.post(this.usersUrl , this.currentUser).subscribe(data => {
      console.log(data); 
      console.log('added successfully'); 
     })
  }
}
}
