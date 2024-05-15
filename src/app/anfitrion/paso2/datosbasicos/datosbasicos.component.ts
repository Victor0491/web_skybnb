import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({   
  selector: 'app-datosbasicos',   
  standalone: true,   
  imports: [CommonModule,FormsModule],   
  templateUrl: './datosbasicos.component.html',   
  styleUrl: './datosbasicos.component.css' })

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
    // Asigna el valor inicial de las propiedades a las variables de valor para el enlace bidireccional
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

  // Define las otras funciones de incremento y decremento aquí

  guardarDatosBasicos(): void {
    // Actualiza el valor de las propiedades con los valores de las variables de valor
    this.dormitorios = parseInt(this.dormitoriosValue, 10);
    this.banios = parseInt(this.baniosValue, 10);
    this.cantidadHuespedes = parseInt(this.cantidadHuespedesValue, 10);
    this.mascotas = (this.mascotasValue === 'true');

    console.log('Dormitorios:', this.dormitorios);
    console.log('Baños:', this.banios);
    console.log('Cantidad de huéspedes:', this.cantidadHuespedes);
    console.log('Mascotas:', this.mascotas);
  }

  nuevoAlojamiento: any = {}; // Objeto para almacenar los datos del alojamiento



  seleccionarOpcion(opcion: string) {
    this.nuevoAlojamiento.tipo_alojamiento = opcion; // Guarda el tipo de alojamiento seleccionado
  }

  navigateToPaso3() {
    // Redirige a la página de ubicación y pasa el objeto nuevoAlojamiento
    this.router.navigate(['anfitrion/paso3'], { state: { alojamiento: this.nuevoAlojamiento } });
  }
}

