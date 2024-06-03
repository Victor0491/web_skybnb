import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  standalone: true,
  imports: [RouterLink,
            CommonModule,
            ReactiveFormsModule,],
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent {
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

  seleccionarTipo(tipo: string): void {
    this.preferenciasForm.get('tipoAlojamiento')?.setValue(tipo);
  }

  navigateToUbicacion() {
    // Redirige a la página de ubicación y pasa el objeto nuevoAlojamiento
    this.router.navigate(['anfitrion/entorno']);
  }
  navigateToPaso1() {
    // Redirige a la página de ubicación y pasa el objeto nuevoAlojamiento
    this.router.navigate(['anfitrion/paso1']);
  }
}