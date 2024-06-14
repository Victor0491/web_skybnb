import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlojamientoService } from '../../../core/service/sesion/alojamiento/alojamiento.service';
import { Alojamiento } from '../../../core/models/Alojamiento';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-informacion',
  standalone: true,
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
  imports: [CommonModule,FormsModule]
})
export class InformacionComponent implements OnInit {
  alojamientoGuardadoExitoso: boolean = false;
  numeroAlojamientoGuardado: number = 0;

  alojamiento: Alojamiento = {
    nombre: '', // Inicialmente vacío
    direccion: '',
    dormitorios: 0,
    banos: 0,
    huespedes: 0,
    mascotas: false,
    usuario: 1, // Inicializado en 1
    precio: 0, // Inicialmente 0
    estado_destacado: false, // Inicialmente false
    tipoalojamiento: 1,
    ubicacion: 1,
    actividades: [], // Inicialmente vacío
    servicios: [], // Inicialmente vacío
  };

  constructor(
    private router: Router,
    private alojamientoService: AlojamientoService
  ) { }

  ngOnInit() {
    const state = history.state;
    if (state && state.alojamiento) {
      this.alojamiento = state.alojamiento;
    } else {
      const alojamientoSesion = sessionStorage.getItem('alojamiento');
      if (alojamientoSesion) {
        this.alojamiento = JSON.parse(alojamientoSesion);
      }
    }

    if (this.alojamientoGuardadoExitoso) {
      setTimeout(() => {
        this.alojamientoGuardadoExitoso = false;
      }, 30000); // 30 segundos
    }
  }

  navigateToImagen() {
    this.router.navigate(['/anfitrion/imagen']);
  }

  guardarAlojamiento() {
    this.alojamientoService.createAlojamiento(this.alojamiento).subscribe(
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
