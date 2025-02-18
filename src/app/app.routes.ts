import { Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { CursosComponent } from './pagina/cursos/cursos.component';
import { ContatoComponent } from './pagina/contato/contato.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'contato', component: ContatoComponent}
];
