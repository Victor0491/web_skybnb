import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividad',
  standalone: true,
  imports: [],
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent {
  nuevoAlojamiento: any = {}; // Objeto para almacenar los datos del alojamiento
  opcionesSeleccionadas: string[] = [];

  constructor(private router: Router) {}

  seleccionarOpcion(opcion: string): void {
    if (this.opcionesSeleccionadas.includes(opcion)) {
      this.opcionesSeleccionadas = this.opcionesSeleccionadas.filter(item => item !== opcion);
    } else {
      const maxOpciones = 3; // Número máximo de opciones permitidas
      if (this.opcionesSeleccionadas.length < maxOpciones) {
        this.opcionesSeleccionadas.push(opcion);
      } else {
        alert("Solo puedes seleccionar hasta tres opciones.");
      }
    }
  }

  navigateToUbicacion(): void {
    if (this.opcionesSeleccionadas.length === 0) {
      alert('Debe seleccionar por lo menos una opción');
      return;
    }
    // Redirige a la página de ubicación y pasa el objeto nuevoAlojamiento
    this.router.navigate(['anfitrion/paso2'], { state: { alojamiento: this.nuevoAlojamiento } });
  }
  navigateToEntorno(): void {
    // Redirige a la página de ubicación y pasa el objeto nuevoAlojamiento
    this.router.navigate(['anfitrion/entorno'], { state: { alojamiento: this.nuevoAlojamiento } });
  }
}
