import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el servicio de enrutamiento

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  showModal: boolean = false;

  constructor(private router: Router) {} // Inyecta el servicio de enrutamiento

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    // Redirige a la página HTML deseada (por ejemplo, '/otra-pagina')
    this.router.navigate(['/index']);
  }

  redirectToAlojamientos() {
    // Redirige a la página de alojamientos (por ejemplo, '/alojamientos')
    this.router.navigate(['/alojamientos']);
}
}
