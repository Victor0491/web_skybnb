import { Component } from '@angular/core';
import { CarruselComponent } from '../../shared/components/carrusel/carrusel.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { FilterComponent } from '../../shared/components/filter/filter.component';

@Component({
  selector: 'app-home-alojamientos',
  standalone: true,
  imports: [CardComponent,CarruselComponent, FilterComponent],
  templateUrl: './home-alojamientos.component.html',
  styleUrl: './home-alojamientos.component.css'
})
export class HomeAlojamientosComponent {

}
