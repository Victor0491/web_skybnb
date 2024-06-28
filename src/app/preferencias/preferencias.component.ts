import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { KnnService } from '../core/service/celula/knn.service';

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
  resultados: any[] = [];
  alojamientos: any[] = []; // Variable para almacenar los alojamientos obtenidos

<<<<<<< HEAD
  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private tipoActividadService : TipoActividadService,
    private tipoUbicacionService : TipoUbicacionService,
    private tipoAlojamientoService : TipoAlojamientoService
  ) {
=======
  constructor(private fb: FormBuilder, private router: Router, private knnService: KnnService) {
>>>>>>> 74bdfeaa59cbb50ba3052fe4e699be3b1859ba4b
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
<<<<<<< HEAD
      console.log(actividad)
      console.log()
      if (actividad === 6) {
        // Si se selecciona o deselecciona "Prefiero Omitir"
        if (actividades.includes(6)) {
          // Deseleccionar "Prefiero Omitir"
          actividades = actividades.filter((a: number) => a !== 6);
=======
      if (actividad === 'Prefiero Omitir') {
        if (actividades.includes('Prefiero Omitir')) {
          actividades = actividades.filter((a: string) => a !== 'Prefiero Omitir');
>>>>>>> 74bdfeaa59cbb50ba3052fe4e699be3b1859ba4b
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
<<<<<<< HEAD
          // Deseleccionar la actividad si ya está seleccionada
          actividades = actividades.filter((a: number) => a !== actividad);
=======
          actividades = actividades.filter((a: string) => a !== actividad);
>>>>>>> 74bdfeaa59cbb50ba3052fe4e699be3b1859ba4b
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
<<<<<<< HEAD
      actividadesControl.setValue(actividades);
    }
  }
  
=======

      actividadesControl.setValue(actividades);
    }
  }

>>>>>>> 74bdfeaa59cbb50ba3052fe4e699be3b1859ba4b
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
      const preferencias = this.preferenciasForm.value;

      // Mapear preferencias a formato esperado por el backend
      const instance = [
        this.mapTipoAlojamiento(preferencias.tipoAlojamiento),
        this.mapUbicacion(preferencias.ubicacion),
        ...this.mapActividades(preferencias.actividad)
      ];

      this.knnService.getKnnPrediction(instance).subscribe(
        (response) => {
          console.log('Predicción exitosa:', response);
          const closest_labels = response.closest_labels;  // Extraer los labels más cercanos
          this.resultados = closest_labels;  // Guardar los resultados
          if (this.resultados.length > 0) {
            this.knnService.getAlojamientosByIds(this.resultados).subscribe(
              (alojamientos) => {
                console.log('Alojamientos obtenidos:', alojamientos);
                this.alojamientos = alojamientos;  // Guardar los alojamientos obtenidos
                Swal.fire({
                  title: '¡Éxito!',
                  text: 'Alojamientos recomendados obtenidos correctamente.',
                  icon: 'success',
                  confirmButtonText: 'Aceptar',
                  customClass: {
                    popup: 'swal2-popup',
                    title: 'swal2-title',
                    confirmButton: 'swal2-confirm'
                  }
                });
              },
              (error) => {
                console.error('Error al obtener los alojamientos:', error);
                Swal.fire({
                  title: 'Error',
                  text: 'Hubo un problema al obtener los alojamientos. Intenta nuevamente.',
                  icon: 'error',
                  confirmButtonText: 'Aceptar',
                  customClass: {
                    popup: 'swal2-popup',
                    title: 'swal2-title',
                    confirmButton: 'swal2-confirm'
                  }
                });
              }
            );
          }
        },
        (error) => {
          console.error('Error en la predicción:', error);
          Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al guardar tus preferencias. Intenta nuevamente.',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            customClass: {
              popup: 'swal2-popup',
              title: 'swal2-title',
              confirmButton: 'swal2-confirm'
            }
          });
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }

  mapTipoAlojamiento(tipo: string): number {
    const mapping: Record<string, number> = { 'Cabaña': 1, 'Casa': 2, 'Departamento': 3 };
    return mapping[tipo] || 0;
  }

  mapUbicacion(ubicacion: string): number {
    const mapping: Record<string, number> = { 'Bosque': 1, 'Playa': 2, 'Ciudad': 3 };
    return mapping[ubicacion] || 0;
  }

  mapActividades(actividades: string[]): number[] {
    const mapping: Record<string, number> = {
      'Surf': 2,
      'Buceo': 3,
      'Escalada en roca': 4,
      'Senderismo': 5,
      'Caminata al aire libre': 6,
      'Prefiero Omitir': 1
    };
    const mapped = actividades.map(act => mapping[act] || 0);
    return [mapped[0] || 0, mapped[1] || 0, mapped[2] || 0];
  }

  onCloseModal(): void {
    this.closeModalClicked.emit();
  }
}
