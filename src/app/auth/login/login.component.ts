import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarAuthComponent } from '../../shared/components/nav-bar-auth/nav-bar-auth.component';
import { RouterModule } from '@angular/router';
import { User } from '../../core/models/User';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,NavBarAuthComponent,RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: User = {
    correo : '',
    password :'',
  }

  show_error = false;
  mensaje_error : string = '';


  validarForm(){
    if (this.user.correo && this.user.password){
      
    } else {
      this.show_error = true;
      this.mensaje_error = 'Por favor complete los campos'
    }
  }

  login(){
    this.validarForm();
  }

}

