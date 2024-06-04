import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarAuthComponent } from '../../shared/components/nav-bar-auth/nav-bar-auth.component';
import { RouterModule } from '@angular/router';
import { User } from '../../core/models/User';
import { FormsModule } from '@angular/forms';
import { AuthSesionService } from '../../core/service/sesion/auth-sesion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, NavBarAuthComponent, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: User = {
    email: '',
    password: '',
    username: '',
    roles : [1]
  }

  show_error = false;
  mensaje_error: string = '';

  constructor(
    private authService: AuthSesionService,
    private router: Router
  ) { }


  validarForm() {
    if (!this.user.email || !this.user.password) {
      this.show_error = true;
      this.mensaje_error = 'Por favor complete los campos'
      return false;
    } else {
      return true;
    }
  }

  login() {
    this.show_error = false;
    this.mensaje_error = '';

    if (this.validarForm()) {
      if (this.authService.login(this.user)) {
        console.log('Login successful!');
        this.router.navigateByUrl('')
      } else {
        this.show_error = true;
        this.mensaje_error = 'Error al iniciar sesión';
      }
    }
  }
}

