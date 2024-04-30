// descripcion.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-descripcion',
  standalone: true,
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent {
  opcionSeleccionada: string = ''; // Inicializa con un valor vacío

  seleccionarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
  }
}
