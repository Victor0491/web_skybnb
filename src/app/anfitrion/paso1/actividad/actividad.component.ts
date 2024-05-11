import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividad',
  standalone: true,
  imports: [],
  templateUrl: './actividad.component.html',
  styleUrl: './actividad.component.css'
})
export class ActividadComponent {
  nuevoAlojamiento: any = {}; // Objeto para almacenar los datos del alojamiento

  constructor(private router: Router) {}

  seleccionarOpcion(opcion: string) {
    this.nuevoAlojamiento.tipo_alojamiento = opcion; // Guarda el tipo de alojamiento seleccionado
  }

  navigateToUbicacion() {
    // Redirige a la página de ubicación y pasa el objeto nuevoAlojamiento
    this.router.navigate(['anfitrion/paso2'], { state: { alojamiento: this.nuevoAlojamiento } });
  }
}


