import { CommonModule } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PreferenciasComponent } from './preferencias/preferencias.component';
import { ModalProfileComponent } from './shared/components/modal-profile/modal-profile.component';
import { ProfileService } from './core/service/profile/profile.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, ModalComponent, FormsModule, PreferenciasComponent, ModalProfileComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web_skybnb';
  modalVisible = false;
  preferenciasVisible = false;


  constructor(private router: Router,private profileservice : ProfileService) {}

  ngOnInit() {
    this.CheckPref();
    console.log(this.profileservice.IsDataPref())
    console.log(this.profileservice.obtenerPreferenciasNumericas())
  }

  isLoginPage(): boolean {
    return this.router.url === '/auth/login';
  }

  isRegisterPage(): boolean {
    return this.router.url === '/auth/register';
  }


  openModal() {
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }

  openPreferencias() {
    this.preferenciasVisible = true;
  }
  
  CheckPref(){
    if (!this.profileservice.IsDataPref()){
      this.preferenciasVisible = true;
    }
  }

  closePreferencias() {
    this.preferenciasVisible = false;
  }

}
