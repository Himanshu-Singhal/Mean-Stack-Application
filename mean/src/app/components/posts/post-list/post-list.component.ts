import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts = [{ title: 'post 1 title', content: 'post 1 content' }, { title: 'post 2 title', content: 'post 2 content' }, { title: 'post 3 title', content: 'post 3 content' }];

  @Input() posts = [];
  constructor() { }

  ngOnInit() {
  }

}
