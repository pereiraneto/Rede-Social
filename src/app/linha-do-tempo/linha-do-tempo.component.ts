import { Component } from '@angular/core';
import { Post } from "./../post/post.model";

@Component({
    selector: 'app-linhaDoTempo',
    templateUrl: './linha-do-tempo.component.html',
})
export class LinhaDoTempoComponent{
    posts: Post[] = [];
}