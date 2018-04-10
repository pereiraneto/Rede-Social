import { PostService } from './post/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routing";

import { AppComponent } from './app.component';
import { NavigatorComponent } from "./navigator/navigator.component";
import { PostComponent } from "./post/post.component";
import { LinhaDoTempoComponent } from "./linha-do-tempo/linha-do-tempo.component";
import { PostInputComponent } from 'app/post/post-input.component';
import { PageComponent } from './page/page.component';
import { EditarPostComponent } from './editar-post/editar-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    PostComponent,
    LinhaDoTempoComponent,
    PostInputComponent,
    PageComponent,
    EditarPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
