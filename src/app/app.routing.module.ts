import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {CursosRoutingModule} from './component/cursos/cursos.routing.module';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        CursosRoutingModule
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule {
}
