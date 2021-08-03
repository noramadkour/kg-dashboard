import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { CommentsComponent } from './modules/comments/comments.component';
import { UsersComponent } from './modules/users/users.component';
import { PhotosComponent } from './modules/photos/photos.component';
import { PostFormComponent } from './modules/post-form/post-form.component';
import { CommentFromComponent } from './modules/comment-from/comment-from.component';
import { UserFormComponent } from './modules/user-form/user-form.component';
import { PhotoFormComponent } from './modules/photo-form/photo-form.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }, {
    path: 'posts-form/:id',
    component: PostFormComponent
  }, {
    path: 'comments',
    component: CommentsComponent
  }, {
    path: 'comment-form/:id',
    component: CommentFromComponent
  },{
    path: 'users',
    component: UsersComponent
  },
  {
  path: 'user-form/:id',
  component: UserFormComponent
},{
    path: 'photos',
    component: PhotosComponent
  },{
  path: 'photos-form/:id',
  
  component: PhotoFormComponent
}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
