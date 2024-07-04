import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Alojamiento } from '../../../core/models/Alojamiento';
import { FormsModule } from '@angular/forms';
import { TipoActividadService } from '../../../core/service/alojamiento/tipo-actividades.service';
import { TipoActividad } from '../../../core/models/TipoActividad';
import Swal from 'sweetalert2';

import { FormAlojamientoService } from '../../../core/service/alojamiento/form-alojamiento.service';

@Component({
  selector: 'app-actividad',
  standalone: true,
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ActividadComponent implements OnInit {
  actividades: TipoActividad[] = [];
  seccionActual = 'actividad';

  formData: { actividades: number[] } = { actividades: [] };

  constructor(
    private router: Router,
    private tipoActividadService: TipoActividadService,
    private formalojamiento: FormAlojamientoService
  ) {
  }

  ngOnInit(): void {
    this.tipoActividadService.getActividad().subscribe(
      actividades => {
        this.actividades = actividades || [];
      },
      error => {
        console.error('Error al obtener actividades', error);
      }
    );
    this.formalojamiento.getFormState().subscribe(data => {
      this.formData = data;
    });
  }

  seleccionarActividad(actividadId: number): void {
    if (this.formData.actividades.includes(actividadId)) {
      console.log(`Deseleccionando actividad con ID: ${actividadId}`);
      this.formalojamiento.updateFormState({ actividades: this.formData.actividades.filter(id => id !== actividadId) });
    } else if (this.formData.actividades.length < 3) {
      console.log(`Seleccionando actividad con ID: ${actividadId}`);
      this.formalojamiento.updateFormState({ actividades: [...this.formData.actividades, actividadId] });
    } else {
      Swal.fire({
        title: 'Atención',
        text: 'Solo puedes seleccionar hasta 3 actividades.',
        icon: 'warning',
        confirmButtonText: 'Entendido'
      });
      return;
    }
    console.log('Actividades seleccionadas actualmente:', this.formData.actividades);
  }

  navigateToPaso2(): void {
    if (this.formData.actividades.length <= 3) {
      this.router.navigate(['anfitrion/paso2']);
    } else {
      Swal.fire({
        title: 'Atención',
        text: 'Por favor selecciona tres actividades o "Prefiero Omitir" antes de continuar.',
        icon: 'warning',
        confirmButtonText: 'Entendido',
        customClass: {
          popup: 'swal2-popup',
          title: 'swal2-title',
          confirmButton: 'swal2-confirm'
        }
      });
    }
  }
  
  navigateToEntorno(): void {
    this.router.navigate(['anfitrion/entorno']);
  }
}
