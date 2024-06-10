import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarAuthComponent } from '../../shared/components/nav-bar-auth/nav-bar-auth.component';
import { RouterModule } from '@angular/router';
import { User } from '../../core/models/User';
import { FormsModule } from '@angular/forms';
import { AuthSesionService } from '../../core/service/sesion/auth-sesion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, NavBarAuthComponent, RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user: User = {
    email: '',
    password: '',
    roles : [1]
  }

  show_error = false;
  mensaje_error: string = '';
  confirm_password: string = '';

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
    this.authService.register(this.user).subscribe(
      response => {
        console.log('User registered successfully', response);
        // Maneja la respuesta exitosa aquí
      },
      error => {
        console.error('Error registering user', error);
        // Maneja el error aquí
      }
    );
  }
}
