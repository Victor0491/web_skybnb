import { Component } from '@angular/core';
import { ModalInformationComponent } from '../../shared/components/modal-information/modal-information.component';
import { CarruselInfoComponent } from '../../shared/components/carrusel-info/carrusel-info.component';
import { MapaComponent } from '../../shared/components/mapa/mapa.component';


@Component({
  selector: 'app-alojamiento-detail',
  standalone: true,
  imports: [ModalInformationComponent, CarruselInfoComponent, MapaComponent],
  templateUrl: './alojamiento-detail.component.html',
  styleUrl: './alojamiento-detail.component.css'
})
export class AlojamientoDetailComponent {

}
