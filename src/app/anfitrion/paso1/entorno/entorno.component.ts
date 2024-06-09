import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-entorno',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './entorno.component.html',
  styleUrl: './entorno.component.css'
})
export class EntornoComponent {
  preferenciasForm: FormGroup;
  ubicaciones: { nombre: string, imagen: string }[] = [
    { nombre: 'Bosque', imagen: 'https://media.traveler.es/photos/62372c7f9999d61fe36db039/16:9/w_2560%2Cc_limit/india.jpg' },
    { nombre: 'Playa', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvh9hichZBrJWNSFFOKcWwQro8k6OBwm0H8Q&s' },
    { nombre: 'Ciudad', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOclOve8ohd-x3yTFEZLyeJ2h6P7EOxZ2qmg&s' }
  ];
  seccionActual = 'ubicacion';
  historialSecciones: string[] = [];
  constructor(private fb: FormBuilder, private router: Router) {
    this.preferenciasForm = this.fb.group({
      ubicacion: ['', Validators.required],
    });
  }

  seleccionarUbicacion(ubicacion: string): void {
    this.preferenciasForm.get('ubicacion')?.setValue(ubicacion);
  }

  navigateToActividad() {
    // Redirige a la página de ubicación y pasa el objeto nuevoAlojamiento
    this.router.navigate(['anfitrion/actividad'], );
  }
  navigateToDescripcion() {
    // Redirige a la página de ubicación y pasa el objeto nuevoAlojamiento
    this.router.navigate(['anfitrion/descripcion'], );
  }

}
