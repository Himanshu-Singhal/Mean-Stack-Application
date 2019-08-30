import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject, Observable } from 'rxjs';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) { }

  getPosts() {
    return [...this.posts];
    // return this.posts;

  }

  // addPost(title: string, content: string) {
  //   this.posts.push({ title: title, content: content });
  //   this.postsUpdated.next([...this.posts]);
  // }

  addPost(title: string, content: string) {
    const post: Post = { id: null, title: title, content: content };

    this.http
      .post<{ message: string }>("http://localhost:3000/api/posts", post)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }



  getUpdatedPostsListner() {
    return this.postsUpdated.asObservable();
  }

}