import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredContent = '';
  enteredTitle = '';
  @Output() postCreatedEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddPost(postInput: HTMLTextAreaElement) {


    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    }

    this.postCreatedEvent.emit(post);
    // alert("post added alert");
    // console.dir(postInput);
  }

}
