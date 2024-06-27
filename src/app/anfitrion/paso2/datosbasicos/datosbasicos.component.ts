import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Servicio } from '../../../core/models/Servicios';
import { ServicioService } from '../../../core/service/alojamiento/tipo-servicios.service';
import { FormAlojamientoService } from '../../../core/service/alojamiento/form-alojamiento.service';

@Component({
  selector: 'app-datosbasicos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './datosbasicos.component.html',
  styleUrls: ['./datosbasicos.component.css']
})
export class DatosbasicosComponent {
  servicios: Servicio[] = [];
  formData = {
    dormitorios: 0,
    banos: 0,
    huespedes: 0,
    mascotas: undefined as boolean | undefined,
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

    const savedData = this.formAlojamientoService.getFormData();
    this.formData.dormitorios = savedData.dormitorios || 0;
    this.formData.banos = savedData.banos || 0;
    this.formData.huespedes = savedData.huespedes || 0;
    this.formData.mascotas = savedData.mascotas !== undefined ? savedData.mascotas : undefined;
    this.formData.servicios = savedData.servicios || [];
  }

  toggleServicio(id: number): void {
    const index = this.formData.servicios.indexOf(id);
    if (index === -1) {
      this.formData.servicios.push(id);
    } else {
      this.formData.servicios.splice(index, 1);
    }
  }

  guardarDatosBasicos(): void {
    this.formAlojamientoService.setFormData(this.formData);
  }

  validateFormData(): boolean {
    if (this.formData.dormitorios <= 0 || this.formData.banos <= 0 || this.formData.huespedes <= 0) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos obligatorios (dormitorios, baños, huéspedes).',
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
      return false;
    }
    if (this.formData.mascotas === undefined) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, selecciona si se permiten mascotas.',
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
      return false;
    }
    if (this.formData.servicios.length < 5) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, selecciona al menos 5 servicios.',
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
      return false;
    }
    return true;
  }

  navigateToPaso3() {
    if (this.validateFormData()) {
      this.guardarDatosBasicos();
      this.router.navigate(['anfitrion/paso3']);
    }
  }

  navigateToUbicacion() {
    if (this.validateFormData()) {
      this.guardarDatosBasicos();
      this.router.navigate(['anfitrion/ubicacion']);
    }
  }
}
