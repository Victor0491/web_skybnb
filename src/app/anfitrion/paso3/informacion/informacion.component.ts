import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlojamientoService } from '../../../core/service/sesion/alojamiento/alojamiento.service';
import { Alojamiento } from '../../../core/models/Alojamiento';

@Component({
  selector: 'app-informacion',
  standalone: true,
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
  imports: [CommonModule]
})
export class InformacionComponent implements OnInit {
  alojamiento: Partial<Alojamiento> = {}; // Cambia esto para recibir el alojamiento desde el estado o algún servicio compartido
  alojamientoGuardadoExitoso: boolean = false;
  numeroAlojamientoGuardado: number = 0;

  constructor(
    private router: Router,
    private alojamientoService: AlojamientoService
  ) { }

  ngOnInit() {
    // Obtener los datos del estado o un servicio compartido
    const state = history.state;
    if (state && state.alojamiento) {
      this.alojamiento = state.alojamiento;
    }

    if (this.alojamientoGuardadoExitoso) {
      setTimeout(() => {
        this.alojamientoGuardadoExitoso = false;
      }, 30000); // 30 segundos
    }

    // Establecer el usuario como 1 y estado_destacado como false
    this.alojamiento.usuario = 1;
    this.alojamiento.estado_destacado = false;
  }

  navigateToImagen() {
    console.log('Botón Comencemos clickeado');
    this.router.navigate(['/anfitrion/imagen']);
  }

  guardarAlojamiento() {
    this.alojamientoService.createAlojamiento(this.alojamiento as Alojamiento).subscribe(
      response => {
        console.log('Alojamiento guardado:', response);
        this.alojamientoGuardadoExitoso = true;
        this.numeroAlojamientoGuardado++;
        this.router.navigate(['']); // Redirige a la página de inicio
      },
      error => {
        console.error('Error al guardar alojamiento:', error);
        alert('Ocurrió un error al guardar el alojamiento. Por favor, inténtalo de nuevo.');
      }
    );
  }

  confirmarGuardar() {
    if (confirm('¿Estás seguro de que deseas guardar este alojamiento?')) {
      this.guardarAlojamiento();
    }
  }
}