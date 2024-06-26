import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../colaborador.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClienthubService } from '../clienthub.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-edit',
  standalone: true,
  imports: [RouterLink,FormsModule, CommonModule ],
  templateUrl: './client-edit.component.html',
  styleUrl: './client-edit.component.css'
})


export class ClienthubEditComponent implements OnInit {
  colaborador: Colaborador | null = null;
  isEditMode: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienthubService: ClienthubService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.clienthubService.getColaborador(id).subscribe(
      colaborador => {
        if(colaborador){
          this.colaborador = colaborador; // Atualiza o colaborador apenas se for definido
        }
      },
      error => {
        console.error('Erro ao carregar colaborador:', error);
      }
    );
  }

  salvarEdicao(): void {
    if (this.colaborador) {
      this.clienthubService.updateColaborador(this.colaborador).subscribe(() => {
        this.router.navigate(['/client-list']);
      });
    } else {
      console.error('Nenhum colaborador para salvar.');
    }
  }
}


