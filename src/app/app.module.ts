import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {CursosComponent} from './component/cursos/cursos.component';
import {routing} from './app.routing';
import { HeaderComponent } from './component/header/header.component';
import { CursoDetalheComponent } from './component/curso-detalhe/curso-detalhe.component';
import {CursosService} from './cursos/cursos.service';
import { CursoNaoEncontradoComponent } from './component/curso-nao-encontrado/curso-nao-encontrado.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        CursosComponent,
        HeaderComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    imports: [
        BrowserModule,
        routing
    ],
    providers: [
        CursosService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
