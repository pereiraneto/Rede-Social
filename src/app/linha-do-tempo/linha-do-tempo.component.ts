import { Component } from '@angular/core';
import { Post } from "./../post/post.model";

@Component({
    selector: 'app-linhaDoTempo',
    templateUrl: './linha-do-tempo.component.html',
})
export class LinhaDoTempoComponent{
    posts: Post[] = [
        new Post(1, "Pereira", "Muito bom o jogo hoje", 10),
        new Post(2, "Jackson", "Faltou mais gols", 8),
        new Post(3, "UrubuMIlGRAU", "Alô TITE !! Vinicius Jr também é brasileiro !", 100)
    ];

    capturaEvent(e){
        console.log(e);
    }
}