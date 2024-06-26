import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ListAlojamiento } from '../../../core/models/Alojamiento';
import { AlojamientoService } from '../../../core/service/alojamiento/alojamiento.service';
import { ObjectToArrayPipe } from '../../../core/pipe/object-to-array.pipe';
import { TruncatePipe } from '../../../core/pipe/truncate.pipe';
import { SeparadorMilesPipe } from '../../../core/pipe/separador-miles.pipe';
import { SkeletonLoaderComponent } from '../skeleton-loader/skeleton-loader.component'; // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink, ObjectToArrayPipe, TruncatePipe, SeparadorMilesPipe, SkeletonLoaderComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  isLoading = true; // Agregado para el estado de carga
  alojamientos: any[] = [];

  constructor(private alojamientoService: AlojamientoService) { }

  ngOnInit() {
    this.CargarAlojamiento();
  }

  CargarAlojamiento() {
    this.alojamientoService.getAlojamientos().subscribe(data => {
      this.alojamientos = data;
      this.isLoading = false; // Cambia el estado de carga una vez que los datos se han cargado
      console.log(this.alojamientos);
    });
  }
}
