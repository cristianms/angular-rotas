import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {CursosComponent} from './component/cursos/cursos.component';
import {CursoDetalheComponent} from './component/curso-detalhe/curso-detalhe.component';
import {CursoNaoEncontradoComponent} from './component/curso-nao-encontrado/curso-nao-encontrado.component';

const APP_ROUTES: Routes = [
    {path: '',                          component: HomeComponent},
    {path: 'login',                     component: LoginComponent},
    {path: 'cursos',                    component: CursosComponent},
    {path: 'curso/:id',                 component: CursoDetalheComponent},
    {path: 'curso-nao-encontrado',      component: CursoNaoEncontradoComponent},
    {path: 'curso-nao-encontrado/:id',  component: CursoNaoEncontradoComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
