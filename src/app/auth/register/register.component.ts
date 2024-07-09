import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarAuthComponent } from '../../shared/components/nav-bar-auth/nav-bar-auth.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PartialUserProfile, User } from '../../core/models/User';
import { UserProfile } from '../../core/models/User';
import { AuthSesionService } from '../../core/service/sesion/auth-sesion.service';
import { Router } from '@angular/router';
import { RegisterResponse } from '../../core/models/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, NavBarAuthComponent, RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    email: '',
    password: '',
    roles: [1]
  };

  userProfile : PartialUserProfile = {
    nombreCompleto: '',
    fecha_nacimiento: null,
    usuario : 0,
    telefono : ''
  }

  show_error = false;
  mensaje_error: string = '';
  confirm_password: string = '';

  // Propiedades para controlar la visibilidad y el mensaje de éxito
  showSuccess = false;
  successMessage = 'Usuario registrado con éxito'; // Mensaje de éxito

  constructor(
    private authService: AuthSesionService,
    private router: Router
  ) { }

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
      (response: RegisterResponse) => {
        console.log('User registered successfully', response);
        const idusuario = response.id_user;
        this.userProfile.usuario = idusuario;  // Asegúrate de que esto coincide con la respuesta del backend
        this.showSuccess = true;
        this.show_error = false;
        this.authService.CrearPerfil(this.userProfile).subscribe(
          response => {
            console.log('Profile Creado correctamente', response)
          }
        )
        // Mostrar SweetAlert
        Swal.fire({
          icon: 'success',
          title: '¡Registro exitoso!',
          text: 'Usuario registrado correctamente',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
            // Redirigir al usuario al login
            this.router.navigateByUrl('/auth/login');
          }
        });
      },
      error => {
        console.error('Error registering user', error);
        this.mensaje_error = 'Error al registrar usuario';
        this.show_error = true;
      }
    );
  }
}
