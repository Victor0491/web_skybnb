import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-preferencias',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './preferencias.component.html',
  styleUrls: ['./preferencias.component.css']
})
export class PreferenciasComponent implements OnInit {
  preferenciasForm: FormGroup;
  tiposAlojamiento: { nombre: string, imagen: string }[] = [
    { nombre: 'Cabaña', imagen: 'https://www.shutterstock.com/image-photo/wooden-cottage-forest-near-biogradsko-600nw-1963746835.jpg' },
    { nombre: 'Casa', imagen: 'https://st2.depositphotos.com/1041088/11595/i/450/depositphotos_115954550-stock-photo-home-exterior-with-garage-and.jpg' },
    { nombre: 'Departamento', imagen: 'https://http2.mlstatic.com/D_NQ_NP_766438-MLC75223256781_032024-O.webp' }
  ];
  ubicaciones: { nombre: string, imagen: string }[] = [
    { nombre: 'Bosque', imagen: 'ruta/a/imagen/bosque.jpg' },
    { nombre: 'Playa', imagen: 'ruta/a/imagen/playa.jpg' },
    { nombre: 'Ciudad', imagen: 'ruta/a/imagen/ciudad.jpg' }
  ];
  actividades: { nombre: string, imagen: string }[] = [
    { nombre: 'Surf', imagen: 'ruta/a/imagen/surf.jpg' },
    { nombre: 'Buceo', imagen: 'ruta/a/imagen/buceo.jpg' },
    { nombre: 'Escalada en roca', imagen: 'ruta/a/imagen/escalada.jpg' },
    { nombre: 'Senderismo', imagen: 'ruta/a/imagen/senderismo.jpg' },
    { nombre: 'Caminata al aire libre', imagen: 'ruta/a/imagen/caminata.jpg' }
  ];
  seccionActual = 'tipoAlojamiento';
  historialSecciones: string[] = [];

  constructor(private fb: FormBuilder) {
    this.preferenciasForm = this.fb.group({
      tipoAlojamiento: ['', Validators.required],
      ubicacion: ['', Validators.required],
      actividad: [[], [Validators.required, Validators.minLength(1), Validators.maxLength(3)]]
    });
  }

  ngOnInit(): void {}

  seleccionarTipo(tipo: string): void {
    this.preferenciasForm.get('tipoAlojamiento')?.setValue(tipo);
    this.historialSecciones.push(this.seccionActual);
  }

  seleccionarUbicacion(ubicacion: string): void {
    this.preferenciasForm.get('ubicacion')?.setValue(ubicacion);
    this.historialSecciones.push(this.seccionActual);
  }

  seleccionarActividad(actividad: string): void {
    const actividadesControl = this.preferenciasForm.get('actividad');
    if (actividadesControl && actividadesControl.value) {
      const actividades = actividadesControl.value;
      if (actividades.includes(actividad)) {
        actividadesControl.setValue(actividades.filter((a: string) => a !== actividad));
      } else {
        actividadesControl.setValue([...actividades, actividad]);
      }
    }
    this.historialSecciones.push(this.seccionActual);
  }

  continuar(): void {
    if (this.seccionActual === 'tipoAlojamiento') {
      this.seccionActual = 'ubicacion';
    } else if (this.seccionActual === 'ubicacion') {
      this.seccionActual = 'actividad';
    }
  }

  volver(): void {
    const ultimaSeccion = this.historialSecciones.pop();
    if (ultimaSeccion !== undefined) {
      this.seccionActual = ultimaSeccion;
    }
  }

  submit(): void {
    if (this.preferenciasForm.valid) {
      console.log(this.preferenciasForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}