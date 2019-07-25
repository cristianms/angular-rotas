import { Component, OnInit } from '@angular/core';
import {AuthService} from '../login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    mostrarMenu: boolean = false;

    constructor(private objAuthService: AuthService) {
    }

    ngOnInit(): void {
        this.objAuthService.mostrarMenuEmitter.subscribe(
            mostrar => this.mostrarMenu = mostrar
        );
    }

}
