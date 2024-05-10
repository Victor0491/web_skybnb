import { Component } from '@angular/core';

import { Router } from '@angular/router'; // Importa el servicio de enrutamiento

@Component({
  selector: 'app-paso1',
  standalone: true,
  imports: [],
  templateUrl: './paso1.component.html',
  styleUrl: './paso1.component.css'
})
export class Paso1Component {

  constructor(private router: Router) {}
  navigateToDescripcion() {
    console.log('Botón Comencemos clickeado');
    this.router.navigate(['/descripcion']);
  }
}
