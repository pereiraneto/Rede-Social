import { PostService } from 'app/post/post.service';
import { Post } from './../post/post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit() {
  }

  addPost(post: Post){
    this.postService.create(post);
  }

}
