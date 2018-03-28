import {Injectable} from '@angular/core';
import {Post} from './post.model';
// // import {Http, Headers, Response} from '@angular/http';
// // import 'rxjs/add/operator/toPromise';
// // import {Observable} from 'rxjs';
// // import {ServiceInterface} from './../interfaces/service.interface';

@Injectable()
export class PostService{

//     // private contatosUrl: string = 'app/contatos';
//     // private headers: Headers = new Headers({'Content-Type': 'application/json'});

    posts: Post[] = [
        new Post(1, "Pereira", "Muito bom o jogo hoje", 10),
        new Post(2, "Jackson", "Faltou mais gols", 8),
        new Post(3, "UrubuMIlGRAU", "Alô TITE !! Vinicius Jr também é brasileiro !", 100)
    ];

//     // constructor(
//     //     private http: Http
//     // ){}

    findAll(): Post[]{
        return this.posts;

        // return this.http.get(this.contatosUrl)
        //     .toPromise() 
        //     .then(response => response.json().data as Contato[])
        //     .catch(this.handleError);
    }

//     find(id: number): Promise<Contato>{
//         return this.findAll()
//             .then((contatos: Contato[]) => contatos.find(contato => contato.id === id));
//     }  

    create(post: Post): void{
        this.posts.push(post);
//         return this.http.post(this.contatosUrl, JSON.stringify(contato), {headers: this.headers})
//         .toPromise()
//         .then((response: Response) => {
//             console.log(response.json().data);
//             return response.json().data as Contato;
//         })
//         .catch(this.handleError);
    }

    addLike(post: Post): void{
        post.qtdLikes++;
    }

    delete(id: number): void{
        for(let i = 0; i < this.posts.length; i++){
            if(this.posts[i].id == id){
                let index = this.posts.indexOf(this.posts[i]);                
                this.posts.splice(index, 1);
            }
        }

        // const url = `${this.contatosUrl}/${contato.id}`;
        // return this.http
        // .delete(url, {headers: this.headers})
        // .toPromise()
        // .then(() => contato as Contato)
        // .catch(this.handleError);
    }
}