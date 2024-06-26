import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../colaborador.model';
import { ClienthubService } from '../clienthub.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent implements OnInit {
   colaboradores: Colaborador[] = []
    isEditMode: boolean = true;

  constructor(
    private clinthubService: ClienthubService,
    private router: Router
    ) { }


    ngOnInit(): void {
      this.getColaboradores();
    }

    getColaboradores(): void {
      this.clinthubService.getColaboradores().subscribe(data => {
        this.colaboradores = data;
      });
    }

    deleteColaborador(id: number): void {
      this.clinthubService.deleteColaborador(id).subscribe(() => {
        this.colaboradores = this.colaboradores.filter(c => c.id !== id);

      })
    }
}












