import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../core/service/profile/profile.service';
import { AuthSesionService } from '../core/service/sesion/auth-sesion.service';


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  user_profile : any;

  activeAccordion: string = '';

  constructor(
    private profileService: ProfileService,
    private authsesion : AuthSesionService
  ) { }

  ngOnInit() {
    this.getProfile();
    console.log('hola')
   }

  toggleAccordion(section: string) {
    if (this.activeAccordion === section) {
      // Si se hace clic en el mismo título que está actualmente abierto,
      // cierra el acordeón
      this.activeAccordion = '';
    } else {
      // Si se hace clic en un título diferente al actualmente abierto,
      // abre el nuevo y cierra los otros abiertos
      this.activeAccordion = section;
    }
  }

  getProfile(){
    const id_user = this.authsesion.obtenerInfoUsuario()
    this.profileService.getProfileUser(id_user).subscribe(data => {
    this.user_profile = data;
    console.log(this.user_profile);
    });
  }
}
