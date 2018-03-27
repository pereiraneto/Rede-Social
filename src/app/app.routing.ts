import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
import {RouterModule, Routes} from '@angular/router';
import { PostInputComponent } from "./post/post-input.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LinhaDoTempoComponent
    },
    {
        path: 'postar',
        component: PostInputComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);