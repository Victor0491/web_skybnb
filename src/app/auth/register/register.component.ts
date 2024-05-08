import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarAuthComponent } from '../../shared/components/nav-bar-auth/nav-bar-auth.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,NavBarAuthComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  

}
