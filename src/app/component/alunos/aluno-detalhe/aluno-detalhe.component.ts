import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlunosService} from '../alunos.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Aluno} from '../aluno';

@Component({
    selector: 'app-aluno-detalhe',
    templateUrl: './aluno-detalhe.component.html',
    styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

    id: number;
    aluno: Aluno;
    inscricao: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private objAlunosService: AlunosService
    ) {
    }

    ngOnInit() {
        /*
        this.inscricao = this.route.params.subscribe((params: any) => {
            this.id = Number(params['id']);
            this.aluno = this.objAlunosService.getAluno(this.id);
        });
        */

        console.log('onInit: AlunoDetalheCompoenent');

        this.inscricao = this.route.data.subscribe(
            (info: { aluno: Aluno}) => {
                console.log(info);
                console.log('Recebendo o obj Aluno do resolver');
                this.aluno = info.aluno;
            }
        );
    }

    ngOnDestroy(): void {
        this.inscricao.unsubscribe();
    }

    editarAluno() {
        this.router.navigate(['/alunos', this.aluno.id, 'editar']);
    }
}
