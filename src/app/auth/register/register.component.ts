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
    correo: '',
    password: '',
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
    if (!this.user.correo || !this.user.password || !this.confirm_password) {
      this.show_error = true;
      this.mensaje_error = 'Por favor complete los campos';
      return false;
    }
    return true;
  }

  register() {
    this.show_error = false;
    this.mensaje_error = '';

    if(this.validarForm()){
      if (this.confirmarPassword()) {
        if (this.authService.register(this.user)) {
          console.log('Usuario Registrado');
          this.router.navigateByUrl('auth/login')
        } else {
          this.show_error = true;
        }
      }
    }
  }
}
