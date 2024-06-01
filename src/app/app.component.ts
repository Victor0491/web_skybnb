import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AnfitrionComponent } from './anfitrion/anfitrion.component';
import { FormsModule } from '@angular/forms';
import { PreferenciasComponent } from './preferencias/preferencias.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NavbarComponent,FooterComponent,ModalComponent, FormsModule,PreferenciasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web_skybnb';

  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/auth/login';
  }

  isRegisterPage(): boolean {
    return this.router.url === '/auth/register';
  }
  
  modalVisible: boolean = false;

  preferenciasVisible: boolean = true;

  openModal() {
    this.modalVisible = true;
  }
  
  closeModal() {
    this.modalVisible = false;
  }

  openPreferencias() {
    this.preferenciasVisible = true;
  }

  closePreferencias() {
    this.preferenciasVisible = false;
  }
}

