import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ListAlojamiento } from '../../../core/models/Alojamiento';
import { AlojamientoService } from '../../../core/service/alojamiento/alojamiento.service';
import { ObjectToArrayPipe } from '../../../core/pipe/object-to-array.pipe';
import { TruncatePipe } from '../../../core/pipe/truncate.pipe';
import { SeparadorMilesPipe } from '../../../core/pipe/separador-miles.pipe';
import { SkeletonLoaderComponent } from '../skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink, ObjectToArrayPipe, TruncatePipe, SeparadorMilesPipe, SkeletonLoaderComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() recomendados: any[] = [];
  alojamientos: any[] = [];
  isLoading = true;
  isLoaded = false;

  constructor(private alojamientoService: AlojamientoService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.CargarAlojamiento();
  }

  CargarAlojamiento() {
    this.alojamientoService.getAlojamientos().subscribe(data => {
      this.alojamientos = data;
      this.isLoading = false;
      setTimeout(() => {
        this.isLoaded = true;
        this.cd.detectChanges();
      }, 0);
    });
  }
}
