import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts = [{ title: 'post 1 title', content: 'post 1 content' }, { title: 'post 2 title', content: 'post 2 content' }, { title: 'post 3 title', content: 'post 3 content' }];

  @Input() posts: Post[] = [];
  constructor() { }

  ngOnInit() {
  }

}
