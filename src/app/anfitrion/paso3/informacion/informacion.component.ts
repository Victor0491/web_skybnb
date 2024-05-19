import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-informacion',
  standalone: true,
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
  imports: [CommonModule] 
})
export class InformacionComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    if (this.alojamientoGuardadoExitoso) {
      setTimeout(() => {
        this.alojamientoGuardadoExitoso = false;
        this.router.navigate(['']); // Redirige a la página de inicio
      }, 30000); // 30 segundos
    }
  }

  navigateToImagen() {
    console.log('Botón Comencemos clickeado');
    this.router.navigate(['/anfitrion/imagen']);
  }

  alojamientoGuardadoExitoso: boolean = false;
  numeroAlojamientoGuardado: number = 0;

  guardarAlojamiento() {
    // Simulación de guardar alojamiento (puedes implementar la lógica real aquí)
    this.alojamientoGuardadoExitoso = true;
    this.numeroAlojamientoGuardado++; // Incrementa el número de alojamiento guardado
  }

  confirmarGuardar() {
    if (confirm('¿Estás seguro de que deseas guardar este alojamiento?')) {
      this.guardarAlojamiento();
    }
  }
}
