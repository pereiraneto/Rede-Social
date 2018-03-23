import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'app/post/post.model';
import { log } from 'util';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
})
export class PostComponent{
    @Input() post: Post;
    @Output() recebeuLike: EventEmitter<Post> = new EventEmitter<Post>();
    fotoLike: string = "../../assets/facebook-velho-botao-curtir.png";

    incrementarLike():void{
        this.post.qtdLikes++;
        this.recebeuLike.emit(this.post);
    }
}