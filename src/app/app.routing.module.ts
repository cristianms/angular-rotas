import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {AuthGuard} from './guard/auth.guard';
import {CursosGuard} from './guard/cursos.guard';
// import {AlunosGuard} from './guard/alunos.guard';

const appRoutes: Routes = [

    // lazy load (carregar o módulo somente quando necessário)
    {
        path: 'cursos',
        loadChildren: './component/cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard],
    },
    {
        path: 'alunos',
        loadChildren: './component/alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard],
        // canActivateChild: [AlunosGuard],
        canLoad: [AuthGuard],
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule {
}
