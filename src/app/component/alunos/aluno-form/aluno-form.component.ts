import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AlunosService} from '../../alunos.service';

@Component({
    selector: 'app-aluno-form',
    templateUrl: './aluno-form.component.html',
    styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy {

    id: number;
    aluno: any;
    inscricao: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private objAlunosService: AlunosService
    ) {
    }

    ngOnInit() {
        this.inscricao = this.route.params.subscribe((params: any) => {
            this.id = Number(params['id']);
            this.aluno = this.objAlunosService.getAluno(this.id);

            if (this.aluno === null) {
                this.aluno = {};
            }
        });
    }

    ngOnDestroy(): void {
        this.inscricao.unsubscribe();
    }
}
