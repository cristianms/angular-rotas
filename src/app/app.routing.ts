import {ModuleWithProviders} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {CursosComponent} from './component/cursos/cursos.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cursos',
        component: CursosComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
