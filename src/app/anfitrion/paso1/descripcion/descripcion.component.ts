import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TipoAlojamientoService,TipoAlojamiento } from '../../../core/service/sesion/alojamiento/tipo-alojamiento.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  standalone: true,
  imports: [RouterLink,
            CommonModule,
            ReactiveFormsModule,],
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  preferenciasForm: FormGroup;
  tiposAlojamiento: TipoAlojamiento[] = [];
  seccionActual = 'tipoAlojamiento';
  historialSecciones: string[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private tipoAlojamientoService: TipoAlojamientoService
  ) {
    this.preferenciasForm = this.fb.group({
      tipoAlojamiento: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getTiposAlojamiento();
  }

  getTiposAlojamiento(): void {
    this.tipoAlojamientoService.getTiposAlojamiento()
      .subscribe(tipos => {
        this.tiposAlojamiento = tipos;
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