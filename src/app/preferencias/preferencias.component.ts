import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { KnnService } from '../core/service/celula/knn.service';
import { TipoActividad } from '../core/models/TipoActividad';
import { TipoActividadService } from '../core/service/alojamiento/tipo-actividades.service';
import { TipoUbicacion } from '../core/models/TipoUbicacion';
import { TipoUbicacionService } from '../core/service/alojamiento/tipo-ubicacion.service';
import { TipoAlojamiento } from '../core/models/TipoAlojamiento';
import { TipoAlojamientoService } from '../core/service/alojamiento/tipo-alojamiento.service';
import { ProfileService } from '../core/service/profile/profile.service';


@Component({
  selector: 'app-preferencias',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './preferencias.component.html',
  styleUrls: ['./preferencias.component.css']
})
export class PreferenciasComponent implements OnInit {
  @Output() closeModalClicked = new EventEmitter<void>();
  preferenciasForm: FormGroup;
  
  seccionActual = 'tipoAlojamiento';
  historialSecciones: string[] = [];
  resultados: any[] = [];

  tiposAlojamiento: TipoAlojamiento[] = [];
  ubicaciones: TipoUbicacion[] = [];
  actividades: TipoActividad[] = [];



  constructor(private fb: FormBuilder, 
    private router: Router,
    private tipoActividadService:  TipoActividadService,
    private tipoUbicacionService: TipoUbicacionService,
    private tipoAlojamientoService : TipoAlojamientoService,
    private profileservice : ProfileService
  ) {
    this.preferenciasForm = this.fb.group({
      tipoalojamiento: ['', Validators.required],
      ubicacion: ['', Validators.required],
      actividad: [[], [Validators.required, Validators.minLength(1), Validators.maxLength(3)]]
    });
  }

  ngOnInit() {
    this.tipoActividadService.getActividad().subscribe(
      actividades => {
        this.actividades = actividades || [];
      },
      error => {
        console.error('Error al obtener actividades', error);
      }
    );

    this.tipoUbicacionService.getUbicaciones()
      .subscribe(ubicaciones => {
        this.ubicaciones = ubicaciones;
      });
    
      this.tipoAlojamientoService.getTiposAlojamiento()
      .subscribe(tipos => {
        this.tiposAlojamiento = tipos;
      });

  }

  seleccionarTipo(tipo: number): void {
    this.preferenciasForm.get('tipoalojamiento')?.setValue(tipo);
    console.log(tipo)
  }

  seleccionarUbicacion(ubicacion: number): void {
    this.preferenciasForm.get('ubicacion')?.setValue(ubicacion);
    console.log(ubicacion)
  }

  seleccionarActividad(actividad: number): void {
    const actividadesControl = this.preferenciasForm.get('actividad');
    if (actividadesControl && actividadesControl.value) {
      let actividades = actividadesControl.value;
      if (actividad === 6) {
        if (actividades.includes(6)) {
          actividades = actividades.filter((a: number) => a !==  6);
        } else {
          actividades = ['Prefiero Omitir'];
        }
      } else {
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
          actividades = actividades.filter((a: number) => a !== actividad);
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
      console.log(actividades)
    }
  }

  continuar(): void {
    if (this.seccionActual === 'tipoAlojamiento' && this.preferenciasForm.get('tipoalojamiento')?.valid) {
      this.historialSecciones.push(this.seccionActual);
      this.seccionActual = 'ubicacion';
    } else if (this.seccionActual === 'ubicacion' && this.preferenciasForm.get('ubicacion')?.valid) {
      this.historialSecciones.push(this.seccionActual);
      this.seccionActual = 'actividad';
    } else if (this.seccionActual === 'actividad' && this.preferenciasForm.get('actividad')?.valid) {
    } else {
      Swal.fire({
        title: 'Atención',
        text: 'Por favor completa la sección actual antes de continuar.',
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

  

  volver(): void {
    const ultimaSeccion = this.historialSecciones.pop();
    if (ultimaSeccion !== undefined) {
      this.seccionActual = ultimaSeccion;
    }
  }

  EnviarForm(){
    if (this.preferenciasForm.valid) {
      const preferencias = this.preferenciasForm.value;
      this.profileservice.guardarPreferencias(preferencias);
      this.onCloseModal();
    } else {
      console.log('Formulario no válido');
    }
  }


  onCloseModal(): void {
    this.closeModalClicked.emit();
  }
}
