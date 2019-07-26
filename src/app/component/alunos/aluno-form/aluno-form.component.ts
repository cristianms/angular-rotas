import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AlunosService} from '../alunos.service';
import {IFormCandeactivate} from '../../../interfaces/iform-candeactivate';
import {Aluno} from '../aluno';

@Component({
    selector: 'app-aluno-form',
    templateUrl: './aluno-form.component.html',
    styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCandeactivate {

    id: number;
    aluno: Aluno;
    inscricao: Subscription;
    formMudou: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private objAlunosService: AlunosService
    ) {
        this.formMudou = false;
    }

    ngOnInit() {
        this.inscricao = this.route.params.subscribe((params: any) => {
            this.id = Number(params['id']);
            this.aluno = this.objAlunosService.getAluno(this.id);

            if (this.aluno === null) {
                this.aluno = new Aluno(null, null, null);
            }
        });
    }

    ngOnDestroy(): void {
        this.inscricao.unsubscribe();
    }

    onInput() {
        this.formMudou = true;
    }

    podeDesativar() {
        if (this.formMudou) {
            return confirm('Deseja abandonar essa página?\nAs alterações realizadas serão perdidas');
        }
        return true;
    }
}
