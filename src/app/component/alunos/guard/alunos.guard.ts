import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../login/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild {

    constructor() {
    }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        console.log('Alunos Guard - Guarda de rota filha');

        return true;
    }
}
