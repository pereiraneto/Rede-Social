import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'app/post/post.model';
import { log } from 'util';
import { PostService } from "./post.service";

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
})
export class PostComponent{
    @Input() post: Post;
    @Output() recebeuLike: EventEmitter<Post> = new EventEmitter<Post>();
    fotoLike: string = "../../assets/facebook-velho-botao-curtir.png";
    imgExcluir: string = "../../assets/delete-icon.png";
    iconeCurtido: string = "../../assets/JD-22-128.png";

    constructor(
        private postService: PostService,
    ){}

    incrementarLike(post:Post):void{
        this.postService.addLike(post);
    }

    deletarPost(id: number):void{
        this.postService.delete(id);
    }
}