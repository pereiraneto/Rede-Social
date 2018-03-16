import { Component } from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
})
export class PostComponent{
    nome: string = "Pereira";
    mensagem: string = "Primeiro Post";
}