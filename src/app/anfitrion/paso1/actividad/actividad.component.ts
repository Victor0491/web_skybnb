import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actividad',
  standalone: true,
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ActividadComponent implements OnInit {
  preferenciasForm: FormGroup;
  actividades: { nombre: string, imagen: string }[] = [
    { nombre: 'Surf', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQt0BnL44w1stL-X2MFG0SjvWJJIUIaSJo0Q&s' },
    { nombre: 'Buceo', imagen: 'https://s3-us-west-2.amazonaws.com/wp-divingyucatan/wp-content/uploads/2020/04/15110254/tipos-trajes-buceo.jpg' },
    { nombre: 'Escalada en roca', imagen: 'https://www.culturarecreacionydeporte.gov.co/sites/default/files/styles/870_x_540/public/2023-06/climbing-g42cb58814_640.jpg?itok=19O-jOqD' },
    { nombre: 'Senderismo', imagen: 'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__medium/public/media/2020/07/15/senderismo_p.jpg' },
    { nombre: 'Caminata al aire libre', imagen: 'https://www.bupasalud.com/sites/default/files/styles/640_x_400/public/articulos/2020-04/fotos/caminata-salud.jpg?itok=ny1gDa_0' },
    { nombre: 'Prefiero Omitir', imagen: 'https://media.istockphoto.com/id/540861476/es/foto/relajaci%C3%B3n-total.jpg?s=612x612&w=0&k=20&c=GEoRJR5eCnHUoV62GH52mNnSO_LnzDzG_AMpPLjpNbE=' }
  ];
  seccionActual = 'actividad';

  constructor(private fb: FormBuilder, private router: Router) {
    this.preferenciasForm = this.fb.group({
      actividad: [[], [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });
  }

  ngOnInit(): void {}

  navigateToUbicacion(actividad: string): void {
    const actividadesControl = this.preferenciasForm.get('actividad');
    if (actividadesControl && actividadesControl.value) {
      let actividades = actividadesControl.value;

      if (actividad === 'Prefiero Omitir') {
        actividadesControl.setValue(['Prefiero Omitir']);
      } else {
        if (actividades.includes('Prefiero Omitir')) {
          Swal.fire({
            title: 'Opción excluyente',
            text: 'No puedes seleccionar otras actividades si has elegido "Prefiero Omitir".',
            icon: 'warning',
            confirmButtonText: 'Entendido',
            customClass: {
              popup: 'swal2-popup',
              title: 'swal2-title',
              confirmButton: 'swal2-confirm'
            }
          });
          return;
        }

        if (actividades.includes(actividad)) {
          actividades = actividades.filter((a: string) => a !== actividad);
        } else if (actividades.length < 3) {
          actividades.push(actividad);
        } else {
          Swal.fire({
            title: 'Límite alcanzado',
            text: 'Solo puedes seleccionar hasta 3 actividades.',
            icon: 'warning',
            confirmButtonText: 'Entendido',
            customClass: {
              popup: 'swal2-popup',
              title: 'swal2-title',
              confirmButton: 'swal2-confirm'
            }
          });
        }
        actividadesControl.setValue(actividades);
      }
    }
  }

  continuar(): void {
    const actividadesSeleccionadas = this.preferenciasForm.get('actividad')?.value;
    if (actividadesSeleccionadas.includes('Prefiero Omitir') || actividadesSeleccionadas.length === 3) {
      this.router.navigate(['anfitrion/paso2']);
    } else {
      Swal.fire({
        title: 'Atención',
        text: 'Por favor selecciona tres actividades o "Prefiero Omitir" antes de continuar.',
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

  navigateToEntorno(): void {
    this.router.navigate(['anfitrion/entorno']);
  }
}
