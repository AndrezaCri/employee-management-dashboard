import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent {
  employee = {
    name: '',
    occupation: ''
  };

  onSubmit() {
    console.log('Employee:', this.employee);
  }

}
