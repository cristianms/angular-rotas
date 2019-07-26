import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AlunoFormComponent} from '../aluno-form/aluno-form.component';
import {IFormCandeactivate} from '../../../interfaces/iform-candeactivate';

@Injectable({
    providedIn: 'root'
})
export class AlunosDeactivateGuard implements CanDeactivate<IFormCandeactivate> {

    constructor() {
    }

    canDeactivate(
        component: IFormCandeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return component.podeDesativar();
    }
}
