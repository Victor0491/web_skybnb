import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { NgForm } from '@angular/forms'; // Importa NgForm
=======
import { CommonModule } from '@angular/common';
import { AlojamientoService } from '../../../core/service/alojamiento/alojamiento.service';
import { Alojamiento } from '../../../core/models/Alojamiento';
import { FormsModule } from '@angular/forms';
import { FormAlojamientoService } from '../../../core/service/alojamiento/form-alojamiento.service';
import { AuthSesionService } from '../../../core/service/sesion/auth-sesion.service';
>>>>>>> 7c50df9e35c33003fb8120dfa34360783e1a7124


@Component({
  selector: 'app-informacion',
  standalone: true,
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
<<<<<<< HEAD
  imports: [CommonModule, FormsModule] // Asegúrate de incluir CommonModule y FormsModule aquí
})
export class InformacionComponent implements OnInit {
  alojamiento = {
    titulo: '',
    descripcion: '',
    precio: 0
  };

  alojamientoGuardadoExitoso: boolean = false;
  numeroAlojamientoGuardado: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.alojamientoGuardadoExitoso) {
      setTimeout(() => {
        this.alojamientoGuardadoExitoso = false;
      }, 30000);
    }
=======
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
    private authsesion : AuthSesionService


  ) {
    const savedData = this.formalojamiento.getFormData();
    this.formData.nombre = savedData.nombre
    this.formData.descripcion = savedData.descripcion
    this.formData.precio = savedData.precio
    this.formData.usuario = this.authsesion.obtenerInfoUsuario();

  }

  ngOnInit() {
    console.log(this.DatosAlojamiento);
>>>>>>> 7c50df9e35c33003fb8120dfa34360783e1a7124
  }

  navigateToImagen() {
    this.router.navigate(['/anfitrion/imagen']);
  }

  guardarAlojamiento() {
<<<<<<< HEAD
    this.alojamientoGuardadoExitoso = true;
    this.numeroAlojamientoGuardado++;
    this.router.navigate(['']);
  }

  confirmarGuardar(form: NgForm) {
    if (!form.valid) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos correctamente antes de guardar.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return;
    }

    if (this.alojamiento.precio < 20000) {
      Swal.fire({
        title: 'Error',
        text: 'El precio debe ser al menos 20,000 CLP.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return;
    }

    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Estás seguro de que deseas guardar este alojamiento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, guardar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardarAlojamiento();
        Swal.fire(
          '¡Guardado!',
          'Alojamiento subido con éxito.',
          'success'
        );
      }
    });
  }
}
=======
    this.formalojamiento.setFormData(this.formData);
    this.DatosAlojamiento = this.formalojamiento.getFormData();
    console.log(this.DatosAlojamiento);
    this.alojamientoService.createAlojamiento(this.DatosAlojamiento)
    .subscribe(
        response => {
            console.log('Alojamiento creado exitosamente:', response);
            this.formalojamiento.clearFormData();
        },
        error => {
            console.error('Error al crear alojamiento:', error);
            // Aquí puedes agregar más lógica para manejar el error, como mostrar un mensaje al usuario
        }
    );
  }
}
>>>>>>> 7c50df9e35c33003fb8120dfa34360783e1a7124
