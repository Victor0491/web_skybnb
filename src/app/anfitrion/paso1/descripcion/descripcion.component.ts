import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  standalone: true,
  imports: [],
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent {
  nuevoAlojamiento: any = {}; // Objeto para almacenar los datos del alojamiento

  constructor(private router: Router) {}

  seleccionarOpcion(opcion: string) {
    this.nuevoAlojamiento.tipo_alojamiento = opcion; // Guarda el tipo de alojamiento seleccionado
  }

  navigateToUbicacion() {
    // Redirige a la página de ubicación y pasa el objeto nuevoAlojamiento
    this.router.navigate(['anfitrion/entorno'], { state: { alojamiento: this.nuevoAlojamiento } });
  }
  navigateToPaso1() {
    // Redirige a la página de ubicación y pasa el objeto nuevoAlojamiento
    this.router.navigate(['anfitrion/paso1'], { state: { alojamiento: this.nuevoAlojamiento } });
  }
}