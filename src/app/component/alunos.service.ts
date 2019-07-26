import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AlunosService {

    private alunos = [
        {id: 1, nome: 'Aluno 01', email: 'aluno01@teste.com'},
        {id: 2, nome: 'Aluno 02', email: 'aluno02@teste.com'},
        {id: 3, nome: 'Aluno 03', email: 'aluno03@teste.com'},
        {id: 4, nome: 'Aluno 04', email: 'aluno04@teste.com'},
        {id: 5, nome: 'Aluno 05', email: 'aluno05@teste.com'},
    ];

    constructor() {
    }

    getAlunos() {
        return this.alunos;
    }

    getAluno(id: number) {
        const arr = this.getAlunos().filter(v => {
            if (v.id === id) {
                return v;
            }
        });
        if (arr.length) {
            return arr[0];
        }
        return null;
    }
}
