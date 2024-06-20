import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthSesionService } from '../../../core/service/sesion/auth-sesion.service';
import { PerfilUsuarioService } from '../../../core/service/sesion/perfil-usuario.service';



@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  templateUrl: './modal-perfil-usuario.component.html',
  styleUrls: ['./modal-perfil-usuario.component.css'],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class PerfilUsuarioComponent implements OnInit {
  nombreCompleto = '';
  fecha_nacimiento: Date | null = null;
  usuario: number | null = null;
  telefono = '';
  actividades: string[] = [];
  ubicacion: string[] = [];
  tipoalojamiento: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private perfilUsuarioService: PerfilUsuarioService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.usuario = +params['id']; // Convertir a número
      this.obtenerPerfil(this.usuario);
    });
  }

  obtenerPerfil(userId: number) {
    this.perfilUsuarioService.obtenerPerfil(userId).subscribe(
      perfil => {
        this.nombreCompleto = perfil.nombreCompleto || '';
        this.fecha_nacimiento = perfil.fecha_nacimiento || null;
        this.telefono = perfil.telefono || '';
        this.actividades = perfil.actividades || [];
        this.ubicacion = perfil.ubicacion || [];
        this.tipoalojamiento = perfil.tipoalojamiento || [];
      },
      error => {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    );
  }

  guardarPerfil() {
    const perfilData = {
      nombreCompleto: this.nombreCompleto,
      fecha_nacimiento: this.fecha_nacimiento,
      usuario: this.usuario,
      telefono: this.telefono,
      actividades: this.actividades,
      ubicacion: this.ubicacion,
      tipoalojamiento: this.tipoalojamiento
    };

    this.perfilUsuarioService.guardarPerfil(perfilData).subscribe(
      response => {
        console.log('Perfil guardado exitosamente:', response);
      },
      error => {
        console.error('Error al guardar el perfil:', error);
      }
    );
  }
}