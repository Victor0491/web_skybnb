import { Component } from '@angular/core';

@Component({
  selector: 'app-descripcionespacio',
  templateUrl: './descripcionespacio.component.html',
  styleUrls: ['./descripcionespacio.component.css']
})
export class DescripcionespacioComponent {
  opcionSeleccionada: string | null = null;

  constructor() {}

  seleccionarOpcion(opcion: string) {
    console.log('Opción seleccionada:', opcion); // Agrega este console.log para depurar
    this.opcionSeleccionada = opcion;
    console.log('Opción asignada:', this.opcionSeleccionada); // Agrega este console.log para depurar
  }
}
