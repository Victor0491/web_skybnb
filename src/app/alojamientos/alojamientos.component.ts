import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.component.html',
  styleUrls: ['./alojamientos.component.css']
})
export class AlojamientosComponent {
  constructor(private router: Router) {}

  navigateToPaso1() {
    console.log('Botón Comencemos clickeado');
    this.router.navigate(['/paso1']);
  }
}
