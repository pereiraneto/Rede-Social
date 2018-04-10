import {Injectable} from '@angular/core';
import {Post} from './post.model';
import {Http, Response, Headers} from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs';
// // import {ServiceInterface} from './../interfaces/service.interface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { error } from 'selenium-webdriver';

@Injectable()
export class PostService{

    private contatosUrl: string = 'http://rest.learncode.academy/api/pereira/posts';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});


    constructor(
        private http: Http
    ){}

    posts: Post[] = [];

    findAll(){
        return this.http.get(this.contatosUrl)
                .map((response: Response) => {
                    this.posts = [];
                    for(let p of response.json()){
                        this.posts.push(new Post(p.id, p.nomePessoa, p.texto, p.qtdLikes))
                    }
                    return this.posts;
                })
                .catch((error: Response) => Observable.throw(error))
    }

    find(id: number){
        return this.findAll()
            .map((posts: Post[]) => posts.find(post => post.id === id))
            .catch((error: Response) => Observable.throw(error));
    } 

    create(post: Post){
        return this.http.post(this.contatosUrl, post)
        .map((response: Response) =>  response.json())
        .catch((error: Response) => Observable.throw(error));
    }

    addLike(post: Post){
        post.qtdLikes++;
        return this.http.put(this.contatosUrl + '/' + post.id, post)
            .map((res: Response) => res.text())
            .catch((err: Response) => Observable.throw(err));
    }

    update(post: Post) {
        return this.http.put(this.contatosUrl + '/' + post.id, post)
        .map((res: Response) => res.text())
        .catch((err: Response) => Observable.throw(err));
    }

    delete(id: number){        
        return this.http.delete(this.contatosUrl + "/" + id)
        .map((response:Response) => response.text())
        .catch((error: Response) => Observable.throw(error));
    }
}