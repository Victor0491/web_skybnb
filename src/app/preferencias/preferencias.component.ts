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
    { nombre: 'Bosque', imagen: 'https://media.traveler.es/photos/62372c7f9999d61fe36db039/16:9/w_2560%2Cc_limit/india.jpg' },
    { nombre: 'Playa', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvh9hichZBrJWNSFFOKcWwQro8k6OBwm0H8Q&s' },
    { nombre: 'Ciudad', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOclOve8ohd-x3yTFEZLyeJ2h6P7EOxZ2qmg&s' }
  ];
  actividades: { nombre: string, imagen: string }[] = [
    { nombre: 'Surf', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQt0BnL44w1stL-X2MFG0SjvWJJIUIaSJo0Q&s' },
    { nombre: 'Buceo', imagen: 'https://s3-us-west-2.amazonaws.com/wp-divingyucatan/wp-content/uploads/2020/04/15110254/tipos-trajes-buceo.jpg' },
    { nombre: 'Escalada en roca', imagen: 'https://www.culturarecreacionydeporte.gov.co/sites/default/files/styles/870_x_540/public/2023-06/climbing-g42cb58814_640.jpg?itok=19O-jOqD' },
    { nombre: 'Senderismo', imagen: 'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__medium/public/media/2020/07/15/senderismo_p.jpg' },
    { nombre: 'Caminata al aire libre', imagen: 'https://www.bupasalud.com/sites/default/files/styles/640_x_400/public/articulos/2020-04/fotos/caminata-salud.jpg?itok=ny1gDa_0' }
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