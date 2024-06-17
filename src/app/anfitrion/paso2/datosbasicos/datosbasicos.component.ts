import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Alojamiento } from '../../../core/models/Alojamiento';
import { ServicioService } from '../../../core/service/alojamiento/tipo-servicios.service';
import { Servicio } from '../../../core/models/Servicios';
import { FormAlojamientoService } from '../../../core/service/alojamiento/form-alojamiento.service';


@Component({
  selector: 'app-datosbasicos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './datosbasicos.component.html',
  styleUrl: './datosbasicos.component.css'
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

    const savedData = this.formAlojamientoService.getFormData();
    this.formData.dormitorios = savedData.dormitorios
    this.formData.banos = savedData.banos
    this.formData.huespedes = savedData.huespedes
    this.formData.mascotas = savedData.mascotas
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

  navigateToPaso3() {
    this.guardarDatosBasicos();
    this.router.navigate(['anfitrion/paso3']);
  }

  navigateToUbicacion() {
    this.guardarDatosBasicos();
    this.router.navigate(['anfitrion/ubicacion']);
  }

}