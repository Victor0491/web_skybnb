import { Component } from '@angular/core';
import { CarruselComponent } from '../../shared/components/carrusel/carrusel.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { AuthSesionService } from '../../core/service/sesion/auth-sesion.service';
import { FilterComponent } from '../../shared/components/filter/filter.component';

@Component({
  selector: 'app-home-alojamientos',
  standalone: true,
  imports: [CardComponent,CarruselComponent, FilterComponent],
  templateUrl: './home-alojamientos.component.html',
  styleUrl: './home-alojamientos.component.css'
})
export class HomeAlojamientosComponent {



  constructor(
    private authService: AuthSesionService,
  ) { }

  ngOnInit(){
    console.log(this.authService.obtenerInfoUsuario())
    console.log(this.authService.ObtenerInfoRoles())
  }
}
