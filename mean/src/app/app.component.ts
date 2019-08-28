import { Component } from '@angular/core';
import { Post } from './models/post.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mean Aplication';

  posts: Post[] = [];

  onPostAdded(post) {

    this.posts.push(post);

  }
}
