import { PostService } from './../post/post.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'app/post/post.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-post',
  templateUrl: './editar-post.component.html',
  styleUrls: ['./editar-post.component.css']
})
export class EditarPostComponent implements OnInit {

  nome: string = "";
  texto: string = "";
  constructor(private postService: PostService, private location: Location) { }

  ngOnInit() {
  }

  submit(e, post){
    console.log(post);
    
    e.preventDefault();
    console.log(this.nome);
    console.log(this.texto);
    // this.post.nomePessoa = this.nome;
    // this.post.texto = this.texto;
    // this.postService.update(post)
    // .subscribe(data => {
    //   console.log(data);
    //   this.location.back();
    // }, error => console.log(error));
  }

}
