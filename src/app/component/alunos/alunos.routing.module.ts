import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlunosComponent} from './alunos.component';
import {AlunoDetalheComponent} from './aluno-detalhe/aluno-detalhe.component';
import {AlunoFormComponent} from './aluno-form/aluno-form.component';
import {AlunosGuard} from './guard/alunos.guard';
import {AlunosDeactivateGuard} from './guard/alunos-deactivate.guard';
import {AlunoDetalheResolver} from './guard/aluno-detalhe.resolver';


const alunosRoutes: Routes = [
    {
        path: '',
        component: AlunosComponent,
        children: [
            {
                path: 'novo',
                component: AlunoFormComponent,
                canDeactivate: [AlunosDeactivateGuard]
            },
            {
                path: ':id',
                component: AlunoDetalheComponent,
                resolve: { aluno: AlunoDetalheResolver }
            },
            {
                path: ':id/editar',
                component: AlunoFormComponent,
                canDeactivate: [AlunosDeactivateGuard]
            }
        ],
        canActivateChild: [AlunosGuard]
    },
];


@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule],
})
export class AlunosRoutingModule {
}
