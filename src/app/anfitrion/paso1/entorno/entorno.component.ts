import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entorno',
  standalone: true,
  templateUrl: './entorno.component.html',
  styleUrls: ['./entorno.component.css'],
  imports: [
    CommonModule // Añade CommonModule aquí
  ]
})
export class EntornoComponent implements OnInit {
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

  ngOnInit(): void {}

  seleccionarUbicacion(ubicacion: string): void {
    this.preferenciasForm.get('ubicacion')?.setValue(ubicacion);
  }

  continuar(): void {
    if (this.preferenciasForm.get('ubicacion')?.valid) {
      this.router.navigate(['anfitrion/actividad']);
    } else {
      Swal.fire({
        title: 'Atención',
        text: 'Por favor, selecciona una ubicación antes de continuar.',
        icon: 'warning',
        confirmButtonText: 'Entendido',
        customClass: {
          popup: 'swal2-popup',
          title: 'swal2-title',
          confirmButton: 'swal2-confirm'
        }
      });
    }
  }

  navigateToDescripcion(): void {
    this.router.navigate(['anfitrion/descripcion']);
  }
}
