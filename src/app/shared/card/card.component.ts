import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() references!: string;
  @Input() date!: string;
  @Input() price!: string;

  alojamientos= [ 
    {
      imagen: "https://images.unsplash.com/photo-1609319172668-8b4f021f3b7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFsb2phbWllbnRvc3xlbnwwfHwwfHx8MA%3D%3D",
      nombre: 'Casa en el bosque',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 300000,
      region: 'Maule',
    },
    {
      imagen: "https://plus.unsplash.com/premium_photo-1681922761648-d5e2c3972982?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FiYSVDMyVCMWFzfGVufDB8fDB8fHww",
      nombre: 'Casa en la Playa',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 70000,
      region: 'Valparaiso',
    },
    {
      imagen: "https://images.unsplash.com/photo-1537197518227-a36efeafd477?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhYmElQzMlQjFhc3xlbnwwfHwwfHx8MA%3D%3D",
      nombre: 'Casa en la montaña',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 300000,
      region: 'Puerto Natales',
    },
    {
      imagen: "https://images.unsplash.com/photo-1622315173972-2bee16732128?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNhYmElQzMlQjFhc3xlbnwwfHwwfHx8MA%3D%3D",
      nombre: 'Casa en el lago',
      descripcion: 'Casa cercana a tus lugares favoritos con hermosa vista al paisaje natural de tu preferencia',
      precio: 200000,
      region: 'La Araucanía',
    },
  ]
}
