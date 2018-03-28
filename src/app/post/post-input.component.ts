import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'app/post/post.model';
import { log } from 'util';
import { PostService } from 'app/post/post.service';

@Component({
    selector: 'app-post-input',
    templateUrl: './post-input.component.html',
})
export class PostInputComponent{
    @Output() newPost = new EventEmitter();
    nomePessoa: string = "";
    texto: string = "";

    constructor(
        private postService: PostService,
    ){}

    submit(e){
        e.preventDefault();
        let posts = this.postService.findAll();
        let cont = 0
        for(let i = 0; i < posts.length; i++){
            cont++;
        }
        let newId = cont;        
        this.newPost.emit(new Post(newId, this.nomePessoa, this.texto, 0));
    }
}