import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienthubService } from '../clienthub.service';
import { Colaborador } from '../colaborador.model';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent {
  employee = {
    id: 0,
    nome: '',
    cargo: ''
  };

  colaboradores: Colaborador[] = [];


  constructor(private clienthobService: ClienthubService) {}
  ngOnInit(): void {
    this.carregarColaboradores();
    this.clienthobService.getColaboradoresObservable().subscribe(
      colaboradores => {
        this.colaboradores = colaboradores;
      }
    );
  }

  onSubmit(): void {
    this.clienthobService.addColaborador(this.employee).subscribe(() => {
      this.employee = { id: 0, nome: '', cargo: '' }; // Limpa o formulário
      alert('Colaborador adicionado com sucesso!');
    }, error => {
      console.error('Erro ao adicionar colaborador:', error);
      alert('Erro ao adicionar colaborador. Verifique o console para mais detalhes.');
    });
  }

  private carregarColaboradores(): void {
    this.clienthobService.getColaboradores().subscribe(
      colaboradores => {
        this.colaboradores = colaboradores;
      },
      error => {
        console.error('Erro ao carregar colaboradores:', error);
      }
    );
  }
}
