import {Component, OnInit} from '@angular/core';
import {AlunosService} from './alunos.service';
import {Router} from '@angular/router';
import {Aluno} from './aluno';

@Component({
    selector: 'app-alunos',
    templateUrl: './alunos.component.html',
    styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

    arrAlunos: Aluno[];

    constructor(
        private objAlunosService: AlunosService,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.arrAlunos = this.objAlunosService.getAlunos();
    }

    chamaForm(id: number) {
        this.router.navigate(['/alunos', id, 'editar']);
    }
}
