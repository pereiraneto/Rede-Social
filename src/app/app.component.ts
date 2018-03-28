import { PostService } from './post/post.service';
import { Post } from './post/post.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private postService: PostService,
  ){}

  addPost(post: Post){
    console.log("isaopdjsaídjada");
    
    this.postService.create(post);
  }
}
