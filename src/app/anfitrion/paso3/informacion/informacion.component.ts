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
  imports: [CommonModule, FormsModule]
})
export class InformacionComponent implements OnInit {
  alojamientoGuardadoExitoso: boolean = false;

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
    // Recuperar datos del sessionStorage
    const tipoAlojamientoId = sessionStorage.getItem('tipoAlojamientoId');
    const ubicacionId = sessionStorage.getItem('ubicacionId');
    const direccionAlojamiento = sessionStorage.getItem('direccionAlojamiento');
    const actividadesSeleccionadas = sessionStorage.getItem('actividadesSeleccionadas');
    const serviciosSeleccionados = sessionStorage.getItem('serviciosSeleccionados');
    const datosBasicos = sessionStorage.getItem('datosBasicos');

    // Asignar datos recuperados al objeto alojamiento
    if (tipoAlojamientoId) {
      this.alojamiento.tipoalojamiento = Number(tipoAlojamientoId);
    }

    if (ubicacionId) {
      this.alojamiento.ubicacion = Number(ubicacionId);
    }

    if (direccionAlojamiento) {
      this.alojamiento.direccion = direccionAlojamiento;
    }

    if (actividadesSeleccionadas) {
      this.alojamiento.actividades = JSON.parse(actividadesSeleccionadas).map(Number);
    }
    
    if (serviciosSeleccionados) {
      this.alojamiento.servicios = JSON.parse(serviciosSeleccionados).map((servicio: any) => servicio.id);
    }

    if (datosBasicos) {
      const parsedDatosBasicos = JSON.parse(datosBasicos);
      this.alojamiento.dormitorios = parsedDatosBasicos.dormitorios;
      this.alojamiento.banos = parsedDatosBasicos.banos;
      this.alojamiento.huespedes = parsedDatosBasicos.huespedes;
      this.alojamiento.mascotas = parsedDatosBasicos.mascotas;
    }

    if (this.alojamientoGuardadoExitoso) {
      setTimeout(() => {
        this.alojamientoGuardadoExitoso = false;
      }, 30000); // 30 segundos
    }

    console.log(this.alojamiento);
  }

  navigateToImagen() {
    this.router.navigate(['/anfitrion/imagen']);
  }

  guardarAlojamiento() {
    console.log('Datos a enviar:', this.alojamiento); // Asegúrate de que los datos están correctos
    this.alojamientoService.createAlojamiento(this.alojamiento).subscribe(
      response => {
        console.log('Alojamiento guardado:', response);
        this.alojamientoGuardadoExitoso = true;
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