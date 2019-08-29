import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject, Observable } from 'rxjs';
import { SubjectSubscriber } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor() { }

  getPosts() {
    return [...this.posts];
    // return this.posts;

  }

  addPost(title: string, content: string) {
    this.posts.push({ title: title, content: content });
    this.postsUpdated.next([...this.posts]);
  }

  getUpdatedPostsListner() {
    return this.postsUpdated.asObservable();
  }
}
