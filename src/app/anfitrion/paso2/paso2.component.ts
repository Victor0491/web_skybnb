import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el servicio de enrutamiento

@Component({
  selector: 'app-paso2',
  standalone: true,
  imports: [],
  templateUrl: './paso2.component.html',
  styleUrl: './paso2.component.css'
})
export class Paso2Component {

  constructor(private router: Router) {}
  navigateToDescripcion() {
    console.log('Botón Comencemos clickeado');
    this.router.navigate(['/anfitrion/ubicacion']);
  }
}
