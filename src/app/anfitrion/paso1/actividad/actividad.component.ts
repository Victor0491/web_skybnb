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
    const savedData = this.formalojamiento.getFormData();
    this.formData.actividades = savedData.actividades || [];
  }

<<<<<<< HEAD
  ngOnInit(): void {}

  navigateToUbicacion(actividad: string): void {
    const actividadesControl = this.preferenciasForm.get('actividad');
    if (actividadesControl && actividadesControl.value) {
      let actividades = actividadesControl.value;
  
      if (actividad === 'Prefiero Omitir') {
        // Si se selecciona "Prefiero Omitir", deselecciona las demás actividades
        if (actividades.includes('Prefiero Omitir')) {
          actividades = actividades.filter((a: string) => a !== 'Prefiero Omitir');
        } else {
          actividades = ['Prefiero Omitir'];
        }
      } else {
        // Si ya se ha seleccionado "Prefiero Omitir", no se permite seleccionar otras actividades
        if (actividades.includes('Prefiero Omitir')) {
          Swal.fire({
            title: 'Opción excluyente',
            text: 'No puedes seleccionar otras actividades si has elegido "Prefiero Omitir".',
            icon: 'warning',
            confirmButtonText: 'Entendido',
            customClass: {
              popup: 'swal2-popup',
              title: 'swal2-title',
              confirmButton: 'swal2-confirm'
            }
          });
          return;
        }
  
        if (actividades.includes(actividad)) {
          actividades = actividades.filter((a: string) => a !== actividad);
        } else if (actividades.length < 3) {
          actividades.push(actividad);
        } else {
          Swal.fire({
            title: 'Límite alcanzado',
            text: 'Solo puedes seleccionar hasta 3 actividades.',
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
  
      actividadesControl.setValue(actividades);
    }
  }
  
  continuar(): void {
    const actividadesSeleccionadas = this.preferenciasForm.get('actividad')?.value;
    if (actividadesSeleccionadas.includes('Prefiero Omitir') || actividadesSeleccionadas.length === 3) {
=======
  ngOnInit(): void {
    this.tipoActividadService.getActividad().subscribe(
      actividades => {
        this.actividades = actividades || [];
      },
      error => {
        console.error('Error al obtener actividades', error);
      }
    );
  }

  seleccionarActividad(actividadId: number): void {
    if (this.formData.actividades.includes(actividadId)) {
      this.formData.actividades = this.formData.actividades.filter(id => id !== actividadId);
    } else if (this.formData.actividades.length < 3) {
      this.formData.actividades.push(actividadId);
    } else {
      Swal.fire({
        title: 'Atención',
        text: 'Solo puedes seleccionar hasta 3 actividades.',
        icon: 'warning',
        confirmButtonText: 'Entendido'
      });
      return;
    }
    this.formalojamiento.setFormData({ actividades: this.formData.actividades });
  }

  navigateToPaso2(): void {
    if (this.formData.actividades.length <= 3) {
>>>>>>> 7c50df9e35c33003fb8120dfa34360783e1a7124
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
<<<<<<< HEAD
  
}
=======
}
>>>>>>> 7c50df9e35c33003fb8120dfa34360783e1a7124
