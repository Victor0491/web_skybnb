import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardComponent } from './shared/card/card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,CardComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web_skybnb';

  alojamientos= [ 
    {
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 100000,
      region: 'Valparaiso',
    },
    {
      nombre: 'Casa en el cerro',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 200000,
      region: 'Valparaiso',
    },
    {
      nombre: 'Casa en la montaña',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 300000,
      region: 'Valparaiso',
    },
    {
      nombre: 'Casa en la playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 300000,
      region: 'Valparaiso',
    },
    {
      nombre: 'Casa en la montaña',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 300000,
      region: 'Valparaiso',
    },
    {
      nombre: 'Casa en la montaña',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 300000,
      region: 'Valparaiso',
    },
    {
      nombre: 'Casa en la montaña',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 300000,
      region: 'Valparaiso',
    },
    {
      nombre: 'Casa en la montaña',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 300000,
      region: 'Valparaiso',
    },
  ]
}

