import { PostService } from './../post/post.service';
import { Component } from '@angular/core';
import { Post } from "./../post/post.model";

@Component({
    selector: 'app-linhaDoTempo',
    templateUrl: './linha-do-tempo.component.html',
})
export class LinhaDoTempoComponent{

    constructor(
        private postService: PostService,
    ){}

    posts: Post[] = this.postService.findAll();

    incrementarLike(post:Post):void{
        this.postService.addLike(post);
    }
}