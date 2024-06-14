import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthSesionService } from '../../../core/service/sesion/auth-sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() modoAnfitrionClicked = new EventEmitter<void>();
  @Output() preferenciasClicked = new EventEmitter<void>();

  correo: string | null = null;

  ngOnInit() {
    this.correo = this.authService.obtenerCorreo();
  }

  constructor(
    private authService: AuthSesionService,
    private router: Router
  ) {}

  onModoAnfitrionClicked() {
    this.modoAnfitrionClicked.emit();
  }

  onPreferenciasClicked() {
    this.preferenciasClicked.emit();
  }

  autenticado(): boolean {
    return this.authService.isLoggin();
  }

  deslogear() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}
