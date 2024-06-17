import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlojamientoService } from '../../../core/service/alojamiento/alojamiento.service';
import { Alojamiento } from '../../../core/models/Alojamiento';
import { FormsModule } from '@angular/forms';
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
    private authsesion : AuthSesionService


  ) {
    const savedData = this.formalojamiento.getFormData();
    this.formData.nombre = savedData.nombre
    this.formData.descripcion = savedData.descripcion
    this.formData.precio = savedData.precio
    this.formData.usuario = this.authsesion.obtenerInfoUsuario();
    this.DatosAlojamiento = this.formalojamiento.getFormData();
  }

  ngOnInit() {

  }

  navigateToImagen() {
    this.router.navigate(['/anfitrion/imagen']);
  }

  guardarAlojamiento() {
    this.formalojamiento.setFormData(this.formData);
    console.log(this.DatosAlojamiento)
    this.alojamientoService.createAlojamiento(this.DatosAlojamiento).subscribe(response => {
      console.log('Alojamiento creado exitosamente:', response);
  })
  }
}