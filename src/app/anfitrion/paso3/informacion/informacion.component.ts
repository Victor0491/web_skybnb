import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { NgForm } from '@angular/forms'; // Importa NgForm


@Component({
  selector: 'app-informacion',
  standalone: true,
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
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
  }

  navigateToImagen() {
    this.router.navigate(['/anfitrion/imagen']);
  }

  guardarAlojamiento() {
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
