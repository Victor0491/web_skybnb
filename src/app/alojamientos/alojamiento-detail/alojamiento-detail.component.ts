import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ModalInformationComponent } from '../../shared/components/modal-information/modal-information.component';
import { CarruselInfoComponent } from '../../shared/components/carrusel-info/carrusel-info.component';
import { MapaComponent } from '../../shared/components/mapa/mapa.component';
import { ReservaComponent } from '../../shared/components/reserva/reserva.component';
import { AlojamientoService } from '../../core/service/alojamiento/alojamiento.service';
import { ObjectToArrayPipe } from '../../core/pipe/object-to-array.pipe'; 

@Component({
  selector: 'app-alojamiento-detail',
  standalone: true,
  imports: [
    CommonModule,
    ModalInformationComponent,
    CarruselInfoComponent,
    MapaComponent,
    ReservaComponent,
    ObjectToArrayPipe
  ],
  templateUrl: './alojamiento-detail.component.html',
  styleUrls: ['./alojamiento-detail.component.css']
})
export class AlojamientoDetailComponent implements OnInit {
  alojamiento: any;

  constructor(private route: ActivatedRoute, private alojamientoService: AlojamientoService) {}

  ngOnInit() {
    this.CargarAlojamiento();
  }

  CargarAlojamiento() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.alojamientoService.getAlojamientoDetails(id).subscribe(data => {
      console.log(data); // Verifica la estructura de los datos recibidos
      this.alojamiento = data;
    });
  }

  compartir() {
    console.log('Compartir clicked');
  }

  guardar() {
    console.log('Guardar clicked');
  }
}
