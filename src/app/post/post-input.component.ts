import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'app/post/post.model';
import { PostService } from 'app/post/post.service';

@Component({
    selector: 'app-post-input',
    templateUrl: './post-input.component.html',
})
export class PostInputComponent{
    @Output() newPost = new EventEmitter();
    id:string;
    nomePessoa: string = "";
    texto: string = "";

    constructor(
        private postService: PostService,
    ){}

    submit(e){
        e.preventDefault();       
        this.newPost.emit(new Post(this.id, this.nomePessoa, this.texto, 0));
    }
}