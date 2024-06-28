import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { KnnService } from '../core/service/celula/knn.service';

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
  tiposAlojamiento: { nombre: string, imagen: string }[] = [
    { nombre: 'Cabaña', imagen: 'https://www.shutterstock.com/image-photo/wooden-cottage-forest-near-biogradsko-600nw-1963746835.jpg' },
    { nombre: 'Casa', imagen: 'https://st2.depositphotos.com/1041088/11595/i/450/depositphotos_115954550-stock-photo-home-exterior-with-garage-and.jpg' },
    { nombre: 'Departamento', imagen: 'https://http2.mlstatic.com/D_NQ_NP_766438-MLC75223256781_032024-O.webp' }
  ];
  ubicaciones: { nombre: string, imagen: string }[] = [
    { nombre: 'Bosque', imagen: 'https://media.traveler.es/photos/62372c7f9999d61fe36db039/16:9/w_2560%2Cc_limit/india.jpg' },
    { nombre: 'Playa', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvh9hichZBrJWNSFFOKcWwQro8k6OBwm0H8Q&s' },
    { nombre: 'Ciudad', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOclOve8ohd-x3yTFEZLyeJ2h6P7EOxZ2qmg&s' }
  ];
  actividades: { nombre: string, imagen: string }[] = [
    { nombre: 'Surf', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQt0BnL44w1stL-X2MFG0SjvWJJIUIaSJo0Q&s' },
    { nombre: 'Buceo', imagen: 'https://s3-us-west-2.amazonaws.com/wp-divingyucatan/wp-content/uploads/2020/04/15110254/tipos-trajes-buceo.jpg' },
    { nombre: 'Escalada en roca', imagen: 'https://www.culturarecreacionydeporte.gov.co/sites/default/files/styles/870_x_540/public/2023-06/climbing-g42cb58814_640.jpg?itok=19O-jOqD' },
    { nombre: 'Senderismo', imagen: 'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__medium/public/media/2020/07/15/senderismo_p.jpg' },
    { nombre: 'Caminata al aire libre', imagen: 'https://www.bupasalud.com/sites/default/files/styles/640_x_400/public/articulos/2020-04/fotos/caminata-salud.jpg?itok=ny1gDa_0' },
    { nombre: 'Prefiero Omitir', imagen: 'https://media.istockphoto.com/id/540861476/es/foto/relajaci%C3%B3n-total.jpg?s=612x612&w=0&k=20&c=GEoRJR5eCnHUoV62GH52mNnSO_LnzDzG_AMpPLjpNbE=' }
  ];
  seccionActual = 'tipoAlojamiento';
  historialSecciones: string[] = [];
  resultados: any[] = [];

  constructor(private fb: FormBuilder, private router: Router, private knnService: KnnService) {
    this.preferenciasForm = this.fb.group({
      tipoAlojamiento: ['', Validators.required],
      ubicacion: ['', Validators.required],
      actividad: [[], [Validators.required, Validators.minLength(1), Validators.maxLength(3)]]
    });
  }

  ngOnInit(): void {}

  seleccionarTipo(tipo: string): void {
    this.preferenciasForm.get('tipoAlojamiento')?.setValue(tipo);
  }

  seleccionarUbicacion(ubicacion: string): void {
    this.preferenciasForm.get('ubicacion')?.setValue(ubicacion);
  }

  seleccionarActividad(actividad: string): void {
    const actividadesControl = this.preferenciasForm.get('actividad');
    if (actividadesControl && actividadesControl.value) {
      let actividades = actividadesControl.value;
      if (actividad === 'Prefiero Omitir') {
        if (actividades.includes('Prefiero Omitir')) {
          actividades = actividades.filter((a: string) => a !== 'Prefiero Omitir');
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
                  this.router.navigateByUrl('', { state: { recomendados: alojamientos } });
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