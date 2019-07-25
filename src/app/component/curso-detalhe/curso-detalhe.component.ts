import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {CursosService} from '../../cursos/cursos.service';

@Component({
    selector: 'app-curso-detalhe',
    templateUrl: './curso-detalhe.component.html',
    styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

    idCurso: number;
    inscricao: Subscription;
    objCurso: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private cursosService: CursosService
    ) {
        /* console.log(this.route); */
        /* this.id = this.route.snapshot.params.id; */
        /* this.id = this.route.snapshot.params['id']; */
    }

    ngOnInit() {
        this.inscricao = this.route.params.subscribe((params: any) => {
            this.idCurso = Number(params.id);
            this.objCurso = this.cursosService.getCurso(this.idCurso);

            if (this.objCurso === null) {
                this.router.navigate(['/curso-nao-encontrado', this.idCurso]);
            }
        });

    }

    ngOnDestroy() {
        this.inscricao.unsubscribe();
    }
}
