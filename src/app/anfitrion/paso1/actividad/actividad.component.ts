import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TipoActividad, TipoActividadService } from '../../../core/service/sesion/alojamiento/tipo-actividades.service';

@Component({
  selector: 'app-actividad',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {
  preferenciasForm: FormGroup;
  actividades: TipoActividad[] = []; // Utiliza el tipo TipoActividad
  seccionActual = 'actividad';
  
  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private tipoActividadService: TipoActividadService // Inyecta el servicio
  ) {
    this.preferenciasForm = this.fb.group({
      actividad: [[], [Validators.required, Validators.minLength(1), Validators.maxLength(3)]]
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
  
  navigateToUbicacion(actividadId: number): void { // Usando el ID de la actividad
    const actividadesControl = this.preferenciasForm.get('actividad');
    if (actividadesControl && actividadesControl.value) {
      const actividades = actividadesControl.value;
      if (actividades.includes(actividadId)) {
        actividadesControl.setValue(actividades.filter((a: number) => a !== actividadId));
      } else if (actividades.length < 3) {
        actividadesControl.setValue([...actividades, actividadId]);
      } else {
        alert('Solo puedes seleccionar hasta 3 actividades.');
      }
    }
  }

  navigateToPaso2(): void {
    if (this.preferenciasForm.get('actividad')?.value.length <= 3) {
      this.router.navigate(['anfitrion/paso2']);
    } else {
      alert('Solo puedes seleccionar hasta 3 actividades.');
    }
  }

  navigateToEntorno(): void {
    this.router.navigate(['anfitrion/entorno']);
  }
}