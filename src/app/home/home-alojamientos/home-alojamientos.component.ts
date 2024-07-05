import { Component, OnInit } from '@angular/core';
import { CarruselComponent } from '../../shared/components/carrusel/carrusel.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { AuthSesionService } from '../../core/service/sesion/auth-sesion.service';
import { AlojamientoService } from '../../core/service/alojamiento/alojamiento.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-alojamientos',
  standalone: true,
  imports: [CardComponent, CarruselComponent, CommonModule],
  templateUrl: './home-alojamientos.component.html',
  styleUrls: ['./home-alojamientos.component.css']
})
export class HomeAlojamientosComponent implements OnInit {
  todosLosAlojamientos: any[] = [];
  alojamientosRecomendados: any[] = [];
  isLoading = true;
  isLoaded = false;

  constructor(
    private authService: AuthSesionService,
    private alojamientoService: AlojamientoService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.authService.obtenerInfoUsuario());
    console.log(this.authService.ObtenerInfoRoles());
    this.CargarAlojamientos();

    // Recibir el estado pasado desde el router
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['recomendados']) {
      this.alojamientosRecomendados = state['recomendados'];
      console.log('Alojamientos recomendados desde el estado:', this.alojamientosRecomendados);
    }
  }

  CargarAlojamientos() {
    this.alojamientoService.getAlojamientos().subscribe(data => {
      this.todosLosAlojamientos = data;
      this.isLoading = false;
      setTimeout(() => {
        this.isLoaded = true;
      }, 0);
    });
  }

  // Método para recibir datos de preferencias seleccionadas
  onPreferenciasSeleccionadas(alojamientos: any[]) {
    this.alojamientosRecomendados = alojamientos;
    console.log('Alojamientos recomendados recibidos:', this.alojamientosRecomendados);
  }
}
