import { Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { HomeComponent } from './home/home.component';
import { ClienthubEditComponent } from './client-edit/client-edit.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'client-list', component: ClientListComponent },
  { path: 'client-form', component: ClientFormComponent },
  { path: 'colaborador/editar/:id', component: ClienthubEditComponent },
  { path: 'colaborador/novo', component: ClientFormComponent },
];


