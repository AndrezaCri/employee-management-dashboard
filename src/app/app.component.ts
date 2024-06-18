import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientListComponent } from './client-list/client-list.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ClientFormComponent,
    ClientListComponent,
    HomeComponent,
    RouterModule,
    NgbCollapseModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CPainel';

  isMenuCollapsed = false;
}
