import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TipoUbicacionService ,TipoUbicacion} from '../../../core/service/sesion/alojamiento/tipo-ubicacion.service';

@Component({
  selector: 'app-entorno',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './entorno.component.html',
  styleUrl: './entorno.component.css'
})
export class EntornoComponent implements OnInit {
  preferenciasForm: FormGroup;
  ubicaciones: TipoUbicacion[] = []; // Aquí usamos el tipo TipoUbicacion
  seccionActual = 'ubicacion';
  historialSecciones: string[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private tipoUbicacionService: TipoUbicacionService // Inyecta el servicio
  ) {
    this.preferenciasForm = this.fb.group({
      ubicacion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.tipoUbicacionService.getUbicaciones().subscribe(
      ubicaciones => {
        this.ubicaciones = ubicaciones;
      },
      error => {
        console.error('Error al obtener ubicaciones', error);
      }
    );
  }

  seleccionarUbicacion(ubicacion: string): void {
    this.preferenciasForm.get('ubicacion')?.setValue(ubicacion);
  }

  navigateToActividad() {
    this.router.navigate(['anfitrion/actividad']);
  }

  navigateToDescripcion() {
    this.router.navigate(['anfitrion/descripcion']);
  }
}