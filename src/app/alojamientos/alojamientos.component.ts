import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.component.html',
  standalone: true,
  styleUrls: ['./alojamientos.component.css']
})
export class AlojamientosComponent {
  constructor(private router: Router) {}

  navigateToPaso1() {
    console.log('Botón Comencemos clickeado');
    this.router.navigate(['/paso1']);
  }
}
