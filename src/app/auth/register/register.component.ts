import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarAuthComponent } from '../../shared/components/nav-bar-auth/nav-bar-auth.component';
import { RouterModule } from '@angular/router';
import { User } from '../../core/models/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,NavBarAuthComponent,RouterModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user: User = {
    correo : '',
    password :'',
  }

  show_error = false;
  mensaje_error : string = '';


  validarForm(){
    if (this.user.correo && this.user.password){
      
    }
  }
  

}
