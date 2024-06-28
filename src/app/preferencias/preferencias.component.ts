import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TipoActividadService } from '../core/service/alojamiento/tipo-actividades.service';
import { TipoUbicacionService } from '../core/service/alojamiento/tipo-ubicacion.service';
import { TipoAlojamientoService } from '../core/service/alojamiento/tipo-alojamiento.service';
import { AuthSesionService } from '../core/service/sesion/auth-sesion.service';

@Component({
  selector: 'app-preferencias',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './preferencias.component.html',
  styleUrls: ['./preferencias.component.css']
})
export class PreferenciasComponent implements OnInit {

  @Output() closeModalClicked = new EventEmitter<void>();

  preferenciasForm: FormGroup;
  
  tiposAlojamiento :any = [];
  ubicaciones: any = [];
  actividades : any= []; 

  seccionActual = 'tipoAlojamiento';
  historialSecciones: string[] = [];

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private tipoActividadService : TipoActividadService,
    private tipoUbicacionService : TipoUbicacionService,
    private tipoAlojamientoService : TipoAlojamientoService
  ) {
    this.preferenciasForm = this.fb.group({
      tipoAlojamiento: ['', Validators.required],
      ubicacion: ['', Validators.required],
      actividad: [[], [Validators.required, Validators.minLength(1), Validators.maxLength(3)]]
    });
  }

  ngOnInit(): void {
    this.loadInformation()
  }

  loadInformation() {
    this.tipoActividadService.getActividad().subscribe(
      actividades => {
        this.actividades = actividades;
        console.log(this.actividades);
      },
      error => {
        console.error('Error al obtener actividades', error);
      }
    );
  
    this.tipoUbicacionService.getUbicaciones().subscribe(
      ubicaciones => {
        this.ubicaciones = ubicaciones;
        console.log(this.ubicaciones);
      },
      error => {
        console.error('Error al obtener ubicaciones', error);
      }
    );
  
    this.tipoAlojamientoService.getTiposAlojamiento().subscribe(
      tipos => {
        this.tiposAlojamiento = tipos;
        console.log(this.tiposAlojamiento)
      },
      error => {
        console.error('Error al obtener tipos de alojamiento', error);
      }
    );
  }

  seleccionarTipo(tipo: number): void {
    this.preferenciasForm.get('tipoAlojamiento')?.setValue(tipo);
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
      console.log(actividad)
      console.log()
      if (actividad === 6) {
        // Si se selecciona o deselecciona "Prefiero Omitir"
        if (actividades.includes(6)) {
          // Deseleccionar "Prefiero Omitir"
          actividades = actividades.filter((a: number) => a !== 6);
        } else {
          // Seleccionar "Prefiero Omitir" y desmarcar todas las demás
          actividades = ['Prefiero Omitir'];
        }
      } else {
        // Si "Prefiero Omitir" ya está seleccionado, no se permite seleccionar otras actividades
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
          // Deseleccionar la actividad si ya está seleccionada
          actividades = actividades.filter((a: number) => a !== actividad);
        } else if (actividades.length < 3) {
          // Seleccionar la actividad si el límite no ha sido alcanzado
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
    if (this.seccionActual === 'tipoAlojamiento' && this.preferenciasForm.get('tipoAlojamiento')?.valid) {
      this.historialSecciones.push(this.seccionActual);
      this.seccionActual = 'ubicacion';
    } else if (this.seccionActual === 'ubicacion' && this.preferenciasForm.get('ubicacion')?.valid) {
      this.historialSecciones.push(this.seccionActual);
      this.seccionActual = 'actividad';
    } else if (this.seccionActual === 'actividad' && this.preferenciasForm.get('actividad')?.valid) {
      this.submit();
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

  submit(): void {
    if (this.preferenciasForm.valid) {
      console.log(this.preferenciasForm.value);
      // Aquí puedes llamar a tu servicio para enviar las preferencias del usuario
      Swal.fire({
        title: '¡Éxito!',
        text: 'Preferencias guardadas correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        customClass: {
          popup: 'swal2-popup',
          title: 'swal2-title',
          confirmButton: 'swal2-confirm'
        }
      }).then(() => {
        // Opcional: Puedes realizar alguna acción adicional después de cerrar el mensaje, como redirigir al usuario
        this.onCloseModal(); // Por ejemplo, cerrar el modal
      });
    } else {
      console.log('Formulario no válido');
    }
  }

  onCloseModal(): void {
    this.closeModalClicked.emit();
  }
}
