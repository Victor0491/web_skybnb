import { Component, Output, EventEmitter } from '@angular/core';
import { Router} from '@angular/router'; // Importa el servicio de enrutamiento

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  standalone: true,
  imports: [],
})
export class ModalComponent {
  @Output() closeModalClicked = new EventEmitter<void>();

  constructor(private router: Router) {}

  onCloseModal() {
    this.closeModalClicked.emit();
  }

  irAlojamientos() {
    this.router.navigate(['/anfitrion/subetuespacio']);
    this.closeModalClicked.emit();
  }
}
