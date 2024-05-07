// descripcion.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el servicio de enrutamiento

@Component({
  selector: 'app-descripcion',
  standalone: true,
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent {

  constructor(private router: Router) {}
  opcionSeleccionada: string = ''; // Inicializa con un valor vacío

  seleccionarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
  }
  navigateToUbicacion() {
    // Redirige a la página de alojamientos (por ejemplo, '/alojamientos')
    this.router.navigate(['/ubicacion']);
}
}
