import { PostService } from 'app/post/post.service';
import { Post } from './../post/post.model';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  private isNew: boolean = true;

  constructor(
    private postService: PostService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  addPost(post: Post){
    this.postService.create(post)
    .subscribe((data) => {
      console.log(data);
      this.location.back();
    },(error) => console.log(error));
  }

}
