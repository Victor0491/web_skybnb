import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datosbasicos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './datosbasicos.component.html',
  styleUrls: ['./datosbasicos.component.css']
})
export class DatosbasicosComponent {
  dormitorios: number = 0;
  banios: number = 0;
  cantidadHuespedes: number = 0;
  mascotas: boolean = false;

  dormitoriosValue: string = '0';
  baniosValue: string = '0';
  cantidadHuespedesValue: string = '0';
  mascotasValue: string = 'false';

  constructor(private router: Router) {
    this.dormitoriosValue = this.dormitorios.toString();
    this.baniosValue = this.banios.toString();
    this.cantidadHuespedesValue = this.cantidadHuespedes.toString();
    this.mascotasValue = this.mascotas.toString();
  }

  incrementarDormitorios(): void {
    this.dormitorios++;
    this.dormitoriosValue = this.dormitorios.toString();
  }

  decrementarDormitorios(): void {
    if (this.dormitorios > 0) {
      this.dormitorios--;
      this.dormitoriosValue = this.dormitorios.toString();
    }
  }

  incrementarBanios(): void {
    this.banios++;
    this.baniosValue = this.banios.toString();
  }

  decrementarBanios(): void {
    if (this.banios > 0) {
      this.banios--;
      this.baniosValue = this.banios.toString();
    }
  }

  incrementarCantidadHuespedes(): void {
    this.cantidadHuespedes++;
    this.cantidadHuespedesValue = this.cantidadHuespedes.toString();
  }

  decrementarCantidadHuespedes(): void {
    if (this.cantidadHuespedes > 0) {
      this.cantidadHuespedes--;
      this.cantidadHuespedesValue = this.cantidadHuespedes.toString();
    }
  }

  guardarDatosBasicos(): void {
    this.dormitorios = parseInt(this.dormitoriosValue, 10);
    this.banios = parseInt(this.baniosValue, 10);
    this.cantidadHuespedes = parseInt(this.cantidadHuespedesValue, 10);
    this.mascotas = (this.mascotasValue === 'true');

    console.log('Dormitorios:', this.dormitorios);
    console.log('Baños:', this.banios);
    console.log('Cantidad de huéspedes:', this.cantidadHuespedes);
    console.log('Mascotas:', this.mascotas);
  }

  nuevoAlojamiento: any = {};

  seleccionarOpcion(opcion: string) {
    this.nuevoAlojamiento.tipo_alojamiento = opcion;
  }

  validateInputs(): boolean {
    if (this.dormitorios <= 0) {
      Swal.fire({
        title: 'Error',
        text: 'Debes tener al menos 1 dormitorio.',
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
      return false;
    }



    if (this.cantidadHuespedes <= 0) {
      Swal.fire({
        title: 'Error',
        text: 'Debes permitir al menos 1 huésped.',
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
      return false;
    }

    if (this.mascotasValue === '') {
      Swal.fire({
        title: 'Error',
        text: 'Debes seleccionar si permites mascotas o no.',
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
      return false;
    }

    return true;
  }

  navigateToPaso3(): void {
    if (this.validateInputs()) {
      this.router.navigate(['anfitrion/paso3'], { state: { alojamiento: this.nuevoAlojamiento } });
    }
  }

  navigateToUbicacion(): void {
    this.router.navigate(['anfitrion/ubicacion'], { state: { alojamiento: this.nuevoAlojamiento } });
  }
}
