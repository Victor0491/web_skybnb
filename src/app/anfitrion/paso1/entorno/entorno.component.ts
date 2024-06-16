import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Alojamiento } from '../../../core/models/Alojamiento';
import { TipoUbicacionService} from '../../../core/service/alojamiento/tipo-ubicacion.service';
import { TipoUbicacion } from '../../../core/models/TipoUbicacion';
import { FormAlojamientoService } from '../../../core/service/alojamiento/form-alojamiento.service';

@Component({
  selector: 'app-entorno',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './entorno.component.html',
  styleUrls: ['./entorno.component.css']
})
export class EntornoComponent implements OnInit {

  ubicaciones: TipoUbicacion[] = [];
  seccionActual = 'ubicacion';

  formData = {
    ubicacion : 0
  };

  constructor(
    private router: Router,
    private tipoUbicacionService: TipoUbicacionService,
    private formalojamiento : FormAlojamientoService
  ) {
    const savedData = this.formalojamiento.getFormData();
    this.formData.ubicacion = savedData.ubicacion;
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

  seleccionarUbicacion(id: any): void {
    this.formData.ubicacion = id;
    console.log('ID de la ubicación guardada en sessionStorage:', id);
    this.formalojamiento.setFormData(this.formData);
  }

  navigateToActividad() {
    this.router.navigate(['anfitrion/actividad']);
  }

  navigateToDescripcion() {
    this.router.navigate(['anfitrion/descripcion']);
  }
}
