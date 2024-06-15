import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule // Importa RouterModule para RouterLink
  ],
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  preferenciasForm: FormGroup;
  tiposAlojamiento: { nombre: string, imagen: string }[] = [
    { nombre: 'Cabaña', imagen: 'https://www.shutterstock.com/image-photo/wooden-cottage-forest-near-biogradsko-600nw-1963746835.jpg' },
    { nombre: 'Casa', imagen: 'https://st2.depositphotos.com/1041088/11595/i/450/depositphotos_115954550-stock-photo-home-exterior-with-garage-and.jpg' },
    { nombre: 'Departamento', imagen: 'https://http2.mlstatic.com/D_NQ_NP_766438-MLC75223256781_032024-O.webp' }
  ];

  seccionActual = 'tipoAlojamiento';
  historialSecciones: string[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.preferenciasForm = this.fb.group({
      tipoAlojamiento: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  seleccionarTipo(tipo: string): void {
    this.preferenciasForm.get('tipoAlojamiento')?.setValue(tipo);
  }

  navigateToUbicacion(): void {
    if (this.preferenciasForm.get('tipoAlojamiento')?.valid) {
      this.router.navigate(['anfitrion/entorno']);
    } else {
      Swal.fire({
        title: 'Atención',
        text: 'Por favor selecciona un tipo de alojamiento antes de continuar.',
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

  navigateToPaso1(): void {
    this.router.navigate(['anfitrion/paso1']);
  }
}
