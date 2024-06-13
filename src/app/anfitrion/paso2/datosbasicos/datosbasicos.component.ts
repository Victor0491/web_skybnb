import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Alojamiento } from '../../../core/models/Alojamiento';
import { ServicioService, Servicio } from '../../../core/service/sesion/alojamiento/tipo-servicios.service';


@Component({   
  selector: 'app-datosbasicos',   
  standalone: true,   
  imports: [CommonModule,FormsModule],   
  templateUrl: './datosbasicos.component.html',   
  styleUrl: './datosbasicos.component.css' })

  export class DatosbasicosComponent {
    nuevoAlojamiento: any = {
      dormitorios: 0,
      banos: 0,
      huespedes: 0,
      mascotas: false
    }; // Objeto para almacenar los datos del alojamiento
  
    servicios: Servicio[] = []; // Array para almacenar los servicios
    servicioSeleccionado: { [id: number]: boolean } = {}; // Objeto para almacenar los servicios seleccionados
  
    constructor(private router: Router, private servicioService: ServicioService) { // Inyecta ServicioService
      // Llama a getServicios() y suscríbete al Observable
      this.servicioService.getServicios().subscribe(servicios => {
        this.servicios = servicios; // Asigna los servicios obtenidos a la propiedad servicios
        // Inicializa el objeto de selección de servicios
        this.servicios.forEach(servicio => {
          this.servicioSeleccionado[servicio.id] = false;
        });
      });
    }
  
    incrementarDormitorios(): void {
      this.nuevoAlojamiento.dormitorios++;
    }
  
    decrementarDormitorios(): void {
      if (this.nuevoAlojamiento.dormitorios > 0) {
        this.nuevoAlojamiento.dormitorios--;
      }
    }
  
    incrementarBanios(): void {
      this.nuevoAlojamiento.banos++;
    }
  
    decrementarBanios(): void {
      if (this.nuevoAlojamiento.banos > 0) {
        this.nuevoAlojamiento.banos--;
      }
    }
  
    incrementarCantidadHuespedes(): void {
      this.nuevoAlojamiento.huespedes++;
    }
  
    decrementarCantidadHuespedes(): void {
      if (this.nuevoAlojamiento.huespedes > 0) {
        this.nuevoAlojamiento.huespedes--;
      }
    }
  
    guardarDatosBasicos(): void {
      console.log('Dormitorios:', this.nuevoAlojamiento.dormitorios);
      console.log('Baños:', this.nuevoAlojamiento.banos);
      console.log('Cantidad de huéspedes:', this.nuevoAlojamiento.huespedes);
      console.log('Mascotas:', this.nuevoAlojamiento.mascotas);
      console.log('Servicios seleccionados:', this.servicioSeleccionado);
    }
    navigateToPaso3() {
      // Redirige a la página de ubicación y pasa el objeto nuevoAlojamiento
      this.router.navigate(['anfitrion/paso3'], { state: { alojamiento: this.nuevoAlojamiento } });
    }
  
    navigateToUbicacion() {
      // Redirige a la página de ubicación y pasa el objeto nuevoAlojamiento
      this.router.navigate(['anfitrion/ubicacion'], { state: { alojamiento: this.nuevoAlojamiento } });
    }
  }