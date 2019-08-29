import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts = [{ title: 'post 1 title', content: 'post 1 content' }, { title: 'post 2 title', content: 'post 2 content' }, { title: 'post 3 title', content: 'post 3 content' }];

  posts: Post[] = [];
  private postSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsService.getUpdatedPostsListner().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.postSubscription.unsubscribe();
  }

}
