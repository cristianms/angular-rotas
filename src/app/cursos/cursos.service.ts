import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CursosService {

    getCursos() {
        return [
            {
                id: 1,
                curso: 'Angular'
            },
            {
                id: 2,
                curso: 'Java'
            },
            {
                id: 3,
                curso: 'PHP'
            },
            {
                id: 4,
                curso: 'NodeJS'
            },
        ];
    }

    getCurso(id: number) {
        const arr = this.getCursos().filter(v => v.id === id);
        if (arr.length) {
            return arr[0];
        }
        return null;
    }

    constructor() {
    }
}
