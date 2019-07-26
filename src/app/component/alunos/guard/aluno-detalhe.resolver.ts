import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Aluno} from '../aluno';
import {Observable} from 'rxjs';
import {AlunosService} from '../alunos.service';

export class AlunoDetalheResolver implements Resolve<Aluno> {

    constructor(
        private objAlunosService: AlunosService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Aluno> | Promise<Aluno> | Aluno {

        console.log('AlunoDetalheResolver');

        const id = Number(route.params['id']);
        return this.objAlunosService.getAluno(id);
    }
}
