import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Alojamiento } from '../../../core/models/Alojamiento';
import { FormsModule } from '@angular/forms';
import { TipoAlojamientoService } from '../../../core/service/alojamiento/tipo-alojamiento.service';
import { TipoAlojamiento } from '../../../core/models/TipoAlojamiento';
import { RouterLink } from '@angular/router';
import { FormAlojamientoService } from '../../../core/service/alojamiento/form-alojamiento.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css'],
  standalone: true,
  imports: [RouterLink,
            CommonModule,
            ReactiveFormsModule,
            FormsModule,],
})
export class DescripcionComponent implements OnInit {
  

  formData = {
    tipoalojamiento : 0
  };

  
  tiposAlojamiento: TipoAlojamiento[] = [];
  seccionActual = 'tipoAlojamiento';

  constructor(
    private router: Router,
    private tipoAlojamientoService: TipoAlojamientoService,
    private formalojamiento : FormAlojamientoService
  ) {
    const savedData = this.formalojamiento.getFormData();
    this.formData.tipoalojamiento = savedData.tipoalojamiento;
  }


  ngOnInit(): void {
    this.getTiposAlojamiento();
  }

  getTiposAlojamiento(): void {
    this.tipoAlojamientoService.getTiposAlojamiento()
      .subscribe(tipos => {
        this.tiposAlojamiento = tipos;
      });
  }

  seleccionarTipo(id: any): void {
    this.formData.tipoalojamiento = id;
    console.log('ID del tipo de alojamiento guardada en sessionStorage:', id);
    this.formalojamiento.setFormData(this.formData);
  }


  navigateToUbicacion():void {
    // Redirige a la página de ubicación y pasa el objeto nuevoAlojamiento
    this.formalojamiento.setFormData(this.formData);
    this.router.navigate(['anfitrion/entorno']);
  }

  navigateToPaso1() {
    // Redirige a la página de ubicación y pasa el objeto nuevoAlojamiento
    this.router.navigate(['anfitrion/paso1']);
  }
}
