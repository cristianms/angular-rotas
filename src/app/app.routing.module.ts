import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';

const appRoutes: Routes = [

    // lazy load (carregar o módulo somente quando necessário)
    {path: 'cursos', loadChildren: './component/cursos/cursos.module#CursosModule'},
    {path: 'alunos', loadChildren: './component/alunos/alunos.module#AlunosModule'},

    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent},
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
