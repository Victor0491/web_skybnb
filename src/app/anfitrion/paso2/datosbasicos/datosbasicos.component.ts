import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
import Swal from 'sweetalert2';

=======
import { Alojamiento } from '../../../core/models/Alojamiento';
import { ServicioService } from '../../../core/service/alojamiento/tipo-servicios.service';
import { Servicio } from '../../../core/models/Servicios';
import { FormAlojamientoService } from '../../../core/service/alojamiento/form-alojamiento.service';


>>>>>>> 7c50df9e35c33003fb8120dfa34360783e1a7124
@Component({
  selector: 'app-datosbasicos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './datosbasicos.component.html',
<<<<<<< HEAD
  styleUrls: ['./datosbasicos.component.css']
=======
  styleUrl: './datosbasicos.component.css'
>>>>>>> 7c50df9e35c33003fb8120dfa34360783e1a7124
})
export class DatosbasicosComponent {
  servicios: Servicio[] = [];
  formData = {
    dormitorios: 0,
    banos: 0,
    huespedes: 0,
    mascotas: false,
    servicios: [] as number[]
  };

  constructor(
    private router: Router,
    private servicioService: ServicioService,
    private formAlojamientoService: FormAlojamientoService
  ) {
    this.servicioService.getServicios().subscribe(servicios => {
      this.servicios = servicios;
    });

<<<<<<< HEAD
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
=======
    const savedData = this.formAlojamientoService.getFormData();
    this.formData.dormitorios = savedData.dormitorios
    this.formData.banos = savedData.banos
    this.formData.huespedes = savedData.huespedes
    this.formData.mascotas = savedData.mascotas
    this.formData.servicios = savedData.servicios || [];
>>>>>>> 7c50df9e35c33003fb8120dfa34360783e1a7124
    }


    toggleServicio(id: number): void {
      const index = this.formData.servicios.indexOf(id);
      if (index === -1) {
        this.formData.servicios.push(id);
      } else {
        this.formData.servicios.splice(index, 1);
      }
    }
<<<<<<< HEAD
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
=======

  guardarDatosBasicos(): void {
    this.formAlojamientoService.setFormData(this.formData);
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
>>>>>>> 7c50df9e35c33003fb8120dfa34360783e1a7124
