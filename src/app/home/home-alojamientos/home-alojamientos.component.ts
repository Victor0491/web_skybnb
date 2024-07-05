import { Component, OnInit } from '@angular/core';
import { CarruselComponent } from '../../shared/components/carrusel/carrusel.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { AuthSesionService } from '../../core/service/sesion/auth-sesion.service';
import { AlojamientoService } from '../../core/service/alojamiento/alojamiento.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { KnnService } from '../../core/service/celula/knn.service';
import { ProfileService } from '../../core/service/profile/profile.service';

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
    private router: Router,
    private alojamientocelula : KnnService,
    private profilesesion : ProfileService
  ) { }

  ngOnInit() {
    console.log(this.authService.obtenerInfoUsuario());
    console.log(this.authService.ObtenerInfoRoles());

    this.CargarAlojamientos();
    this.CargarAlojamientosCelula()
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

  CargarAlojamientosCelula(){
    const instance = this.profilesesion.obtenerPreferenciasNumericas()
    this.alojamientocelula.getKnnPrediction(instance).subscribe(
      (response) => {
        console.log('Predicción exitosa:', response);
        const alojamientos = response.alojamientos;
        this.alojamientosRecomendados = alojamientos
          // Obtener los alojamientos recomendados directamente de la respuesta
      },
    )};
}
