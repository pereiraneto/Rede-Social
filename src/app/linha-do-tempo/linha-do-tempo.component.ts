import { PostService } from './../post/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from "./../post/post.model";

@Component({
    selector: 'app-linhaDoTempo',
    templateUrl: './linha-do-tempo.component.html',
})
export class LinhaDoTempoComponent implements OnInit{

    posts: Post[];

    constructor(
        private postService: PostService,
    ){}

    ngOnInit() {
        this.getPosts();
    }
    
    getPosts(){
        this.postService.findAll()
        .subscribe((data) => {
          this.posts = data;
        },
          (error) => console.log(error));
    }

    incrementarLike(post:Post){
        this.postService.addLike(post)
        .subscribe((data) => {
            console.log(data);

        }, (error) => console.log(error));
    }

    deletarPost(post: Post):void{
        this.postService.delete(post.id)
        .subscribe(data => {
            console.log(data);
            this.getPosts();
        }, error=>console.log(error));
    }
}