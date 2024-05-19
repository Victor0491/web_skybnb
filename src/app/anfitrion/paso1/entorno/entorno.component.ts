import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entorno',
  standalone: true,
  imports: [],
  templateUrl: './entorno.component.html',
  styleUrl: './entorno.component.css'
})
export class EntornoComponent {
  nuevoAlojamiento: any = {}; // Objeto para almacenar los datos del alojamiento

  constructor(private router: Router) {}

  seleccionarOpcion(opcion: string) {
    this.nuevoAlojamiento.tipo_alojamiento = opcion; // Guarda el tipo de alojamiento seleccionado
  }

  navigateToActividad() {
    // Redirige a la página de ubicación y pasa el objeto nuevoAlojamiento
    this.router.navigate(['anfitrion/actividad'], { state: { alojamiento: this.nuevoAlojamiento } });
  }
  navigateToDescripcion() {
    // Redirige a la página de ubicación y pasa el objeto nuevoAlojamiento
    this.router.navigate(['anfitrion/descripcion'], { state: { alojamiento: this.nuevoAlojamiento } });
  }

}
