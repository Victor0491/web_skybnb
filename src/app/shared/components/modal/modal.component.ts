import { Component, Output, EventEmitter } from '@angular/core';
import { Router} from '@angular/router'; // Importa el servicio de enrutamiento
import { AuthSesionService } from '../../../core/service/sesion/auth-sesion.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  standalone: true,
  imports: [],
})
export class ModalComponent {
  @Output() closeModalClicked = new EventEmitter<void>();


  constructor(private router: Router,
              private authsesion : AuthSesionService
  ) {}

  onCloseModal() {
    this.closeModalClicked.emit();
  }

  irAlojamientos() {
    if (!this.authsesion.isLoggin){
    this.router.navigate(['/anfitrion/subetuespacio']);
    this.closeModalClicked.emit();
    }
    else {
      this.closeModalClicked.emit();
      this.router.navigate(['/auth/login']);
    }
  }


}
