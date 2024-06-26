import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientListComponent } from './client-list/client-list.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ClientFormComponent,
    ClientListComponent,
    HomeComponent,
    RouterModule,
    NgbCollapseModule,
    CommonModule,
    FormsModule,
    HttpClientModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CPainel';

  isMenuCollapsed = false;
}
