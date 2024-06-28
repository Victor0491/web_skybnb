import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlojamientoService } from '../../../core/service/alojamiento/alojamiento.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { FormAlojamientoService } from '../../../core/service/alojamiento/form-alojamiento.service';
import { AuthSesionService } from '../../../core/service/sesion/auth-sesion.service';

@Component({
  selector: 'app-informacion',
  standalone: true,
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
  imports: [CommonModule, FormsModule]
})
export class InformacionComponent implements OnInit {

  DatosAlojamiento: any;

  formData = {
    nombre: '',
    descripcion: '',
    precio: 0,
    usuario: 0
  };

  constructor(
    private router: Router,
    private alojamientoService: AlojamientoService,
    private formalojamiento: FormAlojamientoService,
    private authsesion: AuthSesionService
  ) {
    const savedData = this.formalojamiento.getFormData();
    this.formData.nombre = savedData.nombre;
    this.formData.descripcion = savedData.descripcion;
    this.formData.precio = savedData.precio;
    this.formData.usuario = this.authsesion.obtenerInfoUsuario();
  }

  ngOnInit() {
    console.log(this.DatosAlojamiento);
  }

  navigateToImagen() {
    this.router.navigate(['/anfitrion/imagen']);
  }

  guardarAlojamiento() {
    if (!this.formData.nombre || !this.formData.descripcion || this.formData.precio <= 0) {
      Swal.fire({
        title: 'Atención',
        text: 'Por favor completa todos los campos antes de continuar.',
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

    this.formalojamiento.setFormData(this.formData);
    this.DatosAlojamiento = this.formalojamiento.getFormData();
    console.log(this.DatosAlojamiento);
    this.alojamientoService.createAlojamiento(this.DatosAlojamiento)
      .subscribe(
        response => {
          console.log('Alojamiento creado exitosamente:', response);
          const alojamientoId = response.id;
          console.log('ID del alojamiento:', alojamientoId);
          Swal.fire({
            title: 'Éxito',
            text: 'Alojamiento creado exitosamente.',
            icon: 'success',
            confirmButtonText: 'Ok',
            customClass: {
              popup: 'swal2-popup',
              title: 'swal2-title',
              confirmButton: 'swal2-confirm'
            }
          }).then(() => {
            this.formalojamiento.clearFormData();
            this.router.navigateByUrl('/rooms/' + alojamientoId);
          });
        },
        error => {
          console.error('Error al crear alojamiento:', error);
          Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al crear el alojamiento. Por favor, intenta de nuevo.',
            icon: 'error',
            confirmButtonText: 'Entendido',
            customClass: {
              popup: 'swal2-popup',
              title: 'swal2-title',
              confirmButton: 'swal2-confirm'
            }
          });
        }
      );
  }
}
