import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../component/login/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

    constructor(
        private objAuthService: AuthService,
        private router: Router,
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        console.log('Auth Guard');

        return this.verificarAcesso();
    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return this.verificarAcesso();
    }

    verificarAcesso(): boolean {
        console.log('CanLoad: verificando se pode carregar o modulo');
        if (this.objAuthService.usuarioEstaAutenticado()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

}
