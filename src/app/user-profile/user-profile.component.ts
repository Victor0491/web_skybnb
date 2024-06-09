import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any = {
    username: 'Mihawk',
    name: 'John Doe',
    lastName: 'Smith',
    email: 'john.doe@email.com',
    phone: ''
  };

  accommodations: any[] = [
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 60000,
      region: 'Valparaiso',
    },
    {
      nombre: 'Cabaña en el bosque Huilo Huilo',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'De los Rios',
    }
  ];

  reservations: any[] = [
    {
      nombre: 'Cabaña en el bosque Huilo Huilo',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      region: 'De los Rios',
      startDate: '2024-06-01',
      endDate: '2024-06-05'
    },
    {
      nombre: 'Cabaña en el bosque Huilo Huilo',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      region: 'De los Rios',
      startDate: '2023-07-20',
      endDate: '2023-07-27'
    }
  ];

  activeAccordion: string = '';

  constructor() { }

  ngOnInit() { }

  toggleAccordion(section: string) {
    if (this.activeAccordion === section) {
      // Si se hace clic en el mismo título que está actualmente abierto,
      // cierra el acordeón
      this.activeAccordion = '';
    } else {
      // Si se hace clic en un título diferente al actualmente abierto,
      // abre el nuevo y cierra los otros abiertos
      this.activeAccordion = section;
    }
  }
  
}
