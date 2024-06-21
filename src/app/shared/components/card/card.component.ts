import { Component, Input, Output, EventEmitter ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ListAlojamiento } from '../../../core/models/Alojamiento';
import { AlojamientoService } from '../../../core/service/alojamiento/alojamiento.service';
import { ObjectToArrayPipe } from '../../../core/pipe/object-to-array.pipe';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,RouterLink,ObjectToArrayPipe],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit  {

  alojamientos: any = []

  constructor(private alojamientoservice : AlojamientoService ){
  }

  ngOnInit() {
    this.CargarAlojamiento();
  }

  CargarAlojamiento(){
    this.alojamientoservice.getAlojamientos().subscribe(data => {
    this.alojamientos = data;
    console.log(this.alojamientos);
  });
  }
}
