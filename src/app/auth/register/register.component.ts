import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarAuthComponent } from '../../shared/components/nav-bar-auth/nav-bar-auth.component';
import { RouterModule } from '@angular/router';
import { User } from '../../core/models/User';
import { UserProfile } from '../../core/models/User';
import { FormsModule } from '@angular/forms';
import { AuthSesionService } from '../../core/service/sesion/auth-sesion.service';
import { Router } from '@angular/router';
import { PerfilUsuarioComponent } from '../../shared/components/moda-perfil-usuario/modal-perfil-usuario.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, NavBarAuthComponent, RouterModule, FormsModule, PerfilUsuarioComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    email: '',
    password: '',
    roles: [1]
  };

  userProfile: UserProfile = {

      nombreCompleto: "",
      fecha_nacimiento: null,
      usuario: null,
      telefono: "",
      actividades: [],
      ubicacion: [],
      tipoalojamiento: []
  }

  show_error = false;
  mensaje_error: string = '';
  confirm_password: string = '';
  perfilVisible = false;  // Controla la visibilidad del perfil

  constructor(
    private authService: AuthSesionService,
    private router: Router
  ) { }

<<<<<<< HEAD
=======

>>>>>>> test
  confirmarPassword(): boolean {
    if (this.user.password === this.confirm_password) {
      return true;
    } else {
      this.show_error = true;
      this.mensaje_error = 'Contraseñas diferentes';
      return false;
    }
  }

  validarForm(): boolean {
    if (!this.user.email || !this.user.password || !this.confirm_password) {
      this.show_error = true;
      this.mensaje_error = 'Por favor complete los campos';
      return false;
    }
    return true;
  }

  onRegister() {
    if (!this.validarForm() || !this.confirmarPassword()) {
      return;
    }

    this.authService.register(this.user).subscribe(
      response => {
        console.log('User registered successfully', response);
        const userEmail = response.email;  // Asegúrate de que la respuesta contiene el correo electrónico del usuario
        if (userEmail) {
          this.perfilVisible = true;  // Muestra el perfil
        } else {
          console.error('El correo electrónico del usuario registrado no está definido');
        }
      },
      error => {
        console.error('Error registering user', error);
        this.show_error = true;
        this.mensaje_error = 'Error al registrar usuario';
      }
    );
  }
}

