import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TipoUbicacionService } from '../../../core/service/alojamiento/tipo-ubicacion.service';
import { TipoUbicacion } from '../../../core/models/TipoUbicacion';
import { FormAlojamientoService } from '../../../core/service/alojamiento/form-alojamiento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entorno',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './entorno.component.html',
  styleUrls: ['./entorno.component.css']
})
export class EntornoComponent implements OnInit {

  ubicaciones: TipoUbicacion[] = [];
  seccionActual = 'ubicacion';

  formData = {
    ubicacion: null
  };

  constructor(
    private router: Router,
    private tipoUbicacionService: TipoUbicacionService,
    private formalojamiento: FormAlojamientoService
  ) {
    const savedData = this.formalojamiento.getFormData();
    this.formData.ubicacion = savedData.ubicacion || null;
  }

  ngOnInit(): void {
    this.getUbicaciones();
  }

  getUbicaciones(): void {
    this.tipoUbicacionService.getUbicaciones()
      .subscribe(ubicaciones => {
        this.ubicaciones = ubicaciones;
      });
  }

  seleccionarUbicacion(id: any): void {
    if (this.formData.ubicacion === id) {
      this.formData.ubicacion = null; // Deseleccionar si ya está seleccionada
    } else {
      this.formData.ubicacion = id;
    }
    console.log('ID de la ubicación guardada en sessionStorage:', this.formData.ubicacion);
    this.formalojamiento.setFormData(this.formData);
  }

  navigateToActividad(): void {
    if (!this.formData.ubicacion) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, selecciona una opción para continuar.',
      });
    } else {
      this.formalojamiento.setFormData(this.formData);
      this.router.navigate(['anfitrion/actividad']);
    }
  }

  navigateToDescripcion(): void {
    this.router.navigate(['anfitrion/descripcion']);
  }
}
