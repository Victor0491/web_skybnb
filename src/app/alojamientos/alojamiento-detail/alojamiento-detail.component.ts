import { Component } from '@angular/core';
import { ModalInformationComponent } from '../../shared/components/modal-information/modal-information.component';
import { CarruselInfoComponent } from '../../shared/components/carrusel-info/carrusel-info.component';
import { MapaComponent } from '../../shared/components/mapa/mapa.component';
import { ReservaComponent } from '../../shared/components/reserva/reserva.component'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-alojamiento-detail',
  standalone: true,
  imports: [ModalInformationComponent, CarruselInfoComponent, MapaComponent, ReservaComponent], // Agrega aquí ReservaComponent
  templateUrl: './alojamiento-detail.component.html',
  styleUrls: ['./alojamiento-detail.component.css']
})
export class AlojamientoDetailComponent {

  compartir() {
    // Lógica para compartir
    console.log('Compartir clicked');
  }

  guardar() {
    // Lógica para guardar
    console.log('Guardar clicked');
  }
}
