import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './modules/comments/comments.component';
import { UsersComponent } from './modules/users/users.component';
import { PhotosComponent } from './modules/photos/photos.component';
import { PostFormComponent } from './modules/post-form/post-form.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './modules/posts/posts.component';
import { CommentFromComponent } from './modules/comment-from/comment-from.component';
import { UserFormComponent } from './modules/user-form/user-form.component';
import { PhotoFormComponent } from './modules/photo-form/photo-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    UsersComponent,
    PhotosComponent,
    PostsComponent ,
    PostFormComponent,
    CommentFromComponent,
    UserFormComponent,
    PhotoFormComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule ,
    MaterialModule ,
    FormsModule,  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
