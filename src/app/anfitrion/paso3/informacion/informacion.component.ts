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
  formData: any = {
    nombre: '',
    descripcion: '',
    precio: 0,
    usuario: 0
  };

  constructor(
    private router: Router,
    private alojamientoService: AlojamientoService,
    private formAlojamientoService: FormAlojamientoService,
    private authSesionService: AuthSesionService
  ) { }

  ngOnInit(): void {
    // Suscripción al estado del formulario desde el servicio
    this.formAlojamientoService.getFormState().subscribe(formData => {
      this.formData = formData;
    });
  
    // Cargar datos guardados del formulario al iniciar el componente
    const savedDataObservable = this.formAlojamientoService.getFormState();
    
    savedDataObservable.subscribe(savedData => {
      this.formData.nombre = savedData.nombre || '';
      this.formData.descripcion = savedData.descripcion || '';
      this.formData.precio = savedData.precio || 0;
      this.formData.usuario = this.authSesionService.obtenerInfoUsuario();
    });
  }

  navigateToImagen(): void {
    this.router.navigate(['/anfitrion/imagen']);
  }

  guardarAlojamiento(): void {
    // Validación básica del formulario
    if (!this.validarFormulario()) {
      return;
    }

    // Guardar datos del formulario en el servicio
    this.formAlojamientoService.updateFormState(this.formData);

    // Llamar al servicio para crear el alojamiento
    this.alojamientoService.createAlojamiento(this.formData)
      .subscribe(
        (response: any) => {
          console.log('Alojamiento creado exitosamente:', response);
          const alojamientoId = response.id;

          // Mostrar mensaje de éxito y navegar a la página del alojamiento
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
            // Limpiar formulario después de éxito
            this.formAlojamientoService.resetFormState();
            this.router.navigateByUrl('/rooms/' + alojamientoId);
          });
        },
        (error: any) => {
          console.error('Error al crear alojamiento:', error);
          // Mostrar mensaje de error en caso de falla
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

  private validarFormulario(): boolean {
    // Validación básica del formulario
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
      return false;
    }
    return true;
  }
}