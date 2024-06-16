import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Alojamiento } from '../../../core/models/Alojamiento';
import { FormsModule } from '@angular/forms';
import { TipoActividad, TipoActividadService } from '../../../core/service/sesion/alojamiento/tipo-actividades.service';

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
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {
  alojamiento: Partial<Alojamiento> = {
    actividades: [],
  };
  preferenciasForm: FormGroup;
  actividades: TipoActividad[] = [];
  seccionActual = 'actividad';
  
  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private tipoActividadService: TipoActividadService
  ) {
    this.preferenciasForm = this.fb.group({
      actividad: [[], [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });
  }
  
  ngOnInit(): void {
    this.tipoActividadService.getActividad().subscribe(
      actividades => {
        this.actividades = actividades;
      },
      error => {
        console.error('Error al obtener actividades', error);
      }
    );
    console.log(this.preferenciasForm.value)
  }
  
  seleccionarActividad(actividadId: number): void {
    const actividadesControl = this.preferenciasForm.get('actividad');
    if (actividadesControl && actividadesControl.value) {
      const actividades = actividadesControl.value;
      if (actividades.includes(actividadId)) {
        actividadesControl.setValue(actividades.filter((a: number) => a !== actividadId));
      } else if (actividades.length < 3) {
        actividadesControl.setValue([...actividades, actividadId]);
        this.alojamiento.actividades = actividadesControl.value; // Guardar en sesión
        sessionStorage.setItem('actividadesSeleccionadas', JSON.stringify(actividadesControl.value));
      } else {
        alert('Solo puedes seleccionar hasta 3 actividades.');
      }
    }
  }

  navigateToPaso2(): void {
    if (this.preferenciasForm.get('actividad')?.value.length <= 3) {
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
