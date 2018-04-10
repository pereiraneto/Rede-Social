import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Post } from 'app/post/post.model';
import { PostService } from 'app/post/post.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-post-input',
    templateUrl: './post-input.component.html',
})
export class PostInputComponent implements OnInit{
    @Output() newPost = new EventEmitter();
    id:string;
    nomePessoa: string = "";
    texto: string = "";
    post: Post;
    isNew: boolean = true;

    constructor(
        private postService: PostService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void {
        this.post = new Post('', '', '', 0);
        
        this.route.params.forEach((params: Params) => {
            let id: number = params['id'];
            if(id){                
                this.isNew = false;
                this.postService.find(id)
                .subscribe((post: Post) => {
                    this.post = post;                    
                });                
            }
        });
    }

    submit(e){
        e.preventDefault();            
        if(this.isNew){
            console.log(this.nomePessoa);
            console.log(this.texto);
            this.newPost.emit(new Post(this.id, this.nomePessoa, this.texto, 0));
        }else{
            this.post.nomePessoa = this.nomePessoa;
            this.post.texto = this.texto;
            this.postService.update(this.post)
            .subscribe((data) => {
                console.log(data);
                this.location.back();
              },(error) => console.log(error));
        }
    }
}