import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlunosService} from '../../alunos.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-aluno-detalhe',
    templateUrl: './aluno-detalhe.component.html',
    styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

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
        });
    }

    ngOnDestroy(): void {
        this.inscricao.unsubscribe();
    }

    editarAluno() {
        console.log(this.id);
        this.router.navigate(['/alunos', this.aluno.id, 'editar']);
        console.log('foi');
    }
}
