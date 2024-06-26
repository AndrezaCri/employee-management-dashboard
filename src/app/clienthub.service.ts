import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Colaborador } from './colaborador.model';

@Injectable({
  providedIn: 'root'
})
export class ClienthubService {

  colaboradores: Colaborador[] = [
    { id: 1, nome: "João Silva", cargo: "Desenvolvedor" },
    { id: 2, nome: "Maria Oliveira", cargo: "Designer" },
    { id: 3, nome: "Pedro Santos", cargo: "Gerente de Projetos" },
    { id: 4, nome: "Ana Paula", cargo: "Analista" },
    { id: 5, nome: "Carlos Almeida", cargo: "Desenvolvedor" },
    { id: 6, nome: "Beatriz Costa", cargo: "Designer" },
    { id: 7, nome: "Ricardo Pereira", cargo: "Gerente de TI" },
    { id: 8, nome: "Fernanda Lima", cargo: "Scrum Master" },
    { id: 9, nome: "Gabriel Souza", cargo: "DevOps" }
  ];
  colaboradoresSubject: any;

  constructor() { }

  getColaboradores(): Observable<Colaborador[]> {
    return of(this.colaboradores);
  }

  getColaborador(id: number): Observable<Colaborador | undefined> {
    const colaborador = this.colaboradores.find(c => c.id === id);
    return of(colaborador).pipe(delay(200));  }

  addColaborador(colaborador: Colaborador): Observable<Colaborador> {
    colaborador.id = this.getNextId();
    this.colaboradores.push(colaborador);
    return of(colaborador).pipe(delay(200));
  }

  updateColaborador(colaborador: Colaborador): Observable<Colaborador> {
    const index = this.colaboradores.findIndex(c => c.id === colaborador.id);
    if (index !== -1) {
      this.colaboradores[index] = colaborador;
    }
    return of(colaborador).pipe(delay(200));
  }

  deleteColaborador(id: number): Observable<void> {
    const index = this.colaboradores.findIndex(c => c.id === id);
    if (index !== -1) {
      this.colaboradores.splice(index, 1);
    }
    return of();
  }
  private getNextId(): number {
    return this.colaboradores.length > 0 ? Math.max(...this.colaboradores.map(c => c.id)) + 1 : 1;
  }

  getColaboradoresObservable(): Observable<Colaborador[]> {
    return this.colaboradoresSubject.asObservable();
  }
}
