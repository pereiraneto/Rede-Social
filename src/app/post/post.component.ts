import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'app/post/post.model';
import { PostService } from "./post.service";

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
})
export class PostComponent{
    @Input() post: Post;
    @Output() recebeuLike: EventEmitter<Post> = new EventEmitter<Post>();
    @Output() postExcluido: EventEmitter<Post> = new EventEmitter<Post>();
    fotoLike: string = "../../assets/facebook-velho-botao-curtir.png";
    imgExcluir: string = "../../assets/delete-icon.png";
    iconeCurtido: string = "../../assets/JD-22-128.png";
    editar: string = "../../assets/download.png";
    posts: Post[];

    constructor(
        private postService: PostService,
    ){}

    getPosts(){
        this.postService.findAll()
        .subscribe((data) => {
          this.posts = data;
        },
          (error) => console.log(error));
    }

    incrementarLike(post:Post):void{
        this.recebeuLike.emit(post);
    }

    deletarPost(post: Post):void{
        this.postExcluido.emit(post);
    }
}