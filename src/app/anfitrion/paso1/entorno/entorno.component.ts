import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Alojamiento } from '../../../core/models/Alojamiento';
import { FormsModule } from '@angular/forms';
import { TipoUbicacionService ,TipoUbicacion} from '../../../core/service/sesion/alojamiento/tipo-ubicacion.service';

@Component({
  selector: 'app-entorno',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './entorno.component.html',
  styleUrl: './entorno.component.css'
})
export class EntornoComponent implements OnInit {
  alojamiento: Partial<Alojamiento> = {
    ubicacion: null,
  };
  preferenciasForm: FormGroup;
  ubicaciones: TipoUbicacion[] = [];
  seccionActual = 'ubicacion';
  historialSecciones: string[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private tipoUbicacionService: TipoUbicacionService
  ) {
    this.preferenciasForm = this.fb.group({
      ubicacion: ['', Validators.required],
    });
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

  seleccionarUbicacion(id: any): void { // Cambiado de string a any
    this.alojamiento.ubicacion = id;
  }

  navigateToActividad() {
    this.router.navigate(['anfitrion/actividad']);
  }

  navigateToDescripcion() {
    this.router.navigate(['anfitrion/descripcion']);
  }
}