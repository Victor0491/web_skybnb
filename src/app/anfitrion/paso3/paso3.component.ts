import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el servicio de enrutamiento

@Component({
  selector: 'app-paso3',
  standalone: true,
  imports: [],
  templateUrl: './paso3.component.html',
  styleUrl: './paso3.component.css'
})
export class Paso3Component {
  constructor(private router: Router) {}
  navigateToImagen() {
    console.log('Botón Comencemos clickeado');
    this.router.navigate(['/anfitrion/imagen']);
  }
  navigateToDatosbasicos() {
    console.log('Botón Comencemos clickeado');
    this.router.navigate(['/anfitrion/datosbasicos']);
  }

}
