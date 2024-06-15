import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  standalone: true,
  imports: [FormsModule]  // Asegúrate de importar FormsModule aquí
})
export class FilterComponent {
  filters = {
    type: '',
    environment: '',
    activity1: '',
    activity2: '',
    activity3: ''
  };
}
