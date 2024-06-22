import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ModalInformationComponent } from '../../shared/components/modal-information/modal-information.component';
import { CarruselInfoComponent } from '../../shared/components/carrusel-info/carrusel-info.component';
import { MapaComponent } from '../../shared/components/mapa/mapa.component';
import { ReservaComponent } from '../../shared/components/reserva/reserva.component';
import { AlojamientoService } from '../../core/service/alojamiento/alojamiento.service';

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
  templateUrl:'./alojamiento-detail.component.html',
  styleUrls: ['./alojamiento-detail.component.css']
})
export class AlojamientoDetailComponent implements OnInit {
  detailsalojamiento: any 


  constructor(private route: ActivatedRoute,private alojamientoService: AlojamientoService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.alojamientoService.getAlojamientoDetails(id).subscribe(data => {
      this.detailsalojamiento = data;
      console.log(this.detailsalojamiento);
    });
    
  }

  compartir() {
    console.log('Compartir clicked');
  }

  guardar() {
    console.log('Guardar clicked');
  }
}
