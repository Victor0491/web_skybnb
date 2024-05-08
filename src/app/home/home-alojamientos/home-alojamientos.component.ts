import { Component } from '@angular/core';
import { CarruselComponent } from '../../shared/components/carrusel/carrusel.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-home-alojamientos',
  standalone: true,
  imports: [CardComponent,CarruselComponent],
  templateUrl: './home-alojamientos.component.html',
  styleUrl: './home-alojamientos.component.css'
})
export class HomeAlojamientosComponent {

}
