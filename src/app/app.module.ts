import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {CursosComponent} from './component/cursos/cursos.component';
import {routing} from './app.routing';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        CursosComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
