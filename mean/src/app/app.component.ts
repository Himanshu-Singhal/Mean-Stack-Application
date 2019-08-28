import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mean Aplication';

  posts = [];

  onPostAdded(post) {

    this.posts.push(post);

  }
}
