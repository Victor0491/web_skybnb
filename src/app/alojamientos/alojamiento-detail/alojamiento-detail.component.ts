import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ModalInformationComponent } from '../../shared/components/modal-information/modal-information.component';
import { CarruselInfoComponent } from '../../shared/components/carrusel-info/carrusel-info.component';
import { MapaComponent } from '../../shared/components/mapa/mapa.component';
import { ReservaComponent } from '../../shared/components/reserva/reserva.component';

@Component({
  selector: 'app-alojamiento-detail',
  standalone: true,
  imports: [
    CommonModule,
    ModalInformationComponent,
    CarruselInfoComponent,
    MapaComponent,
    ReservaComponent
  ],
  templateUrl: './alojamiento-detail.component.html',
  styleUrls: ['./alojamiento-detail.component.css']
})
export class AlojamientoDetailComponent implements OnInit {
  alojamiento: any;
  alojamientos = [
    {
      id: 0,
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaíso',
    },
    {
      id: 1,
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaíso',
    },
    {
      id: 2,
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaíso',
    },
    {
      id: 3,
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaíso',
    },
    {
      id: 4,
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaíso',
    },
    // Otros alojamientos...
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID from route:', id); // Verifica el ID
    this.alojamiento = this.alojamientos.find(aloj => aloj.id === +id!);

    // Log para verificar el alojamiento encontrado
    console.log('Alojamiento encontrado:', this.alojamiento);
  }

  compartir() {
    console.log('Compartir clicked');
  }

  guardar() {
    console.log('Guardar clicked');
  }
}
