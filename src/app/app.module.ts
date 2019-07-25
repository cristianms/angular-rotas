import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {AppRoutingModule} from './app.routing.module';
import {AuthService} from './component/login/auth.service';
import {FormsModule} from '@angular/forms';
// import {CursosModule} from './component/cursos/cursos.module';
// import {AlunosModule} from './component/alunos/alunos.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,

        // CursosModule,
        // AlunosModule,

        AppRoutingModule,
        FormsModule,
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
