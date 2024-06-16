import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Alojamiento } from '../../../core/models/Alojamiento';
import { ServicioService, Servicio } from '../../../core/service/sesion/alojamiento/tipo-servicios.service';


@Component({
  selector: 'app-datosbasicos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './datosbasicos.component.html',
  styleUrl: './datosbasicos.component.css'
})
export class DatosbasicosComponent {
  nuevoAlojamiento: any = {
    dormitorios: 0,
    banos: 0,
    huespedes: 0,
    mascotas: false
  }; // Objeto para almacenar los datos del alojamiento

  servicios: Servicio[] = []; // Array para almacenar los servicios
  serviciosSeleccionados: Servicio[] = []; // Array para almacenar los servicios seleccionados

  constructor(private router: Router, private servicioService: ServicioService) { // Inyecta ServicioService
    // Llama a getServicios() y suscríbete al Observable
    this.servicioService.getServicios().subscribe(servicios => {
      this.servicios = servicios; // Asigna los servicios obtenidos a la propiedad servicios
    });
  }

  guardarDatosBasicos(): void {
    console.log('Dormitorios:', this.nuevoAlojamiento.dormitorios);
    console.log('Baños:', this.nuevoAlojamiento.banos);
    console.log('Cantidad de huéspedes:', this.nuevoAlojamiento.huespedes);
    console.log('Mascotas:', this.nuevoAlojamiento.mascotas);
    console.log('Servicios seleccionados:', this.serviciosSeleccionados);

    // Guardar los datos básicos y los servicios seleccionados en sessionStorage
    sessionStorage.setItem('datosBasicos', JSON.stringify(this.nuevoAlojamiento));
    sessionStorage.setItem('serviciosSeleccionados', JSON.stringify(this.serviciosSeleccionados));
  }

  toggleServicio(servicio: Servicio): void {
    const index = this.serviciosSeleccionados.findIndex(s => s.id === servicio.id);
    if (index === -1) {
      this.serviciosSeleccionados.push(servicio);
    } else {
      this.serviciosSeleccionados.splice(index, 1);
    }
  }

  isServicioSeleccionado(servicio: Servicio): boolean {
    return this.serviciosSeleccionados.some(s => s.id === servicio.id);
  }

  navigateToPaso3() {
    this.guardarDatosBasicos();
    this.router.navigate(['anfitrion/paso3']);
  }

  navigateToUbicacion() {
    this.guardarDatosBasicos();
    this.router.navigate(['anfitrion/ubicacion']);
  }
}

