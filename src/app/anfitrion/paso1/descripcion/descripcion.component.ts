import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TipoAlojamientoService } from '../../../core/service/alojamiento/tipo-alojamiento.service';
import { TipoAlojamiento } from '../../../core/models/TipoAlojamiento';
import { RouterLink } from '@angular/router';
import { FormAlojamientoService } from '../../../core/service/alojamiento/form-alojamiento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css'],
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, FormsModule],
})
export class DescripcionComponent implements OnInit {

  formData: any = {};

  tiposAlojamiento: TipoAlojamiento[] = [];
  seccionActual = 'tipoAlojamiento';
  showError = false;

  constructor(
    private router: Router,
    private tipoAlojamientoService: TipoAlojamientoService,
    private formalojamiento: FormAlojamientoService
  ) {}

  ngOnInit(): void {
    this.getTiposAlojamiento();
    this.formalojamiento.getFormState().subscribe(data => {
      this.formData = data;
    });
    
  }

  getTiposAlojamiento(): void {
    this.tipoAlojamientoService.getTiposAlojamiento()
      .subscribe(tipos => {
        this.tiposAlojamiento = tipos;
      });
  }

  seleccionarTipo(id: any): void {
    if (this.formData.tipoalojamiento === id) {
      this.formalojamiento.updateFormState({ tipoalojamiento: null }); // Deseleccionar si ya está seleccionado
    } else {
      this.formalojamiento.updateFormState({ tipoalojamiento: id });
      console.log(this.formData.tipoalojamiento)
    }
    this.showError = false; // Ocultar mensaje de error al seleccionar una opción
  }

  validateAndNavigate(): void {
    if (!this.formData.tipoalojamiento) {
      this.showError = true; // Mostrar mensaje de error si no se ha seleccionado un tipo de alojamiento
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, selecciona una opción para continuar.',
      });
    } else {
      this.navigateToUbicacion();
    }
  }

  navigateToUbicacion(): void {
    this.router.navigate(['anfitrion/entorno']);
  }

  navigateToPaso1(): void {
    this.router.navigate(['anfitrion/paso1']);
  }
}
