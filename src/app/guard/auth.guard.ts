import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../component/login/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    usuarioAutenticado: boolean = false;

    constructor(
        private objAuthService: AuthService,
        private router: Router,
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.objAuthService.usuarioEstaAutenticado()) {
            return true;
        }

        this.router.navigate(['/login']);

        return false;
    }

}
