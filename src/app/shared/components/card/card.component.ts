import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
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
  @Input() alojamientos: any[] = [];
  @Input() isLoading = true;
  @Input() isLoaded = false;

  constructor(private alojamientoService: AlojamientoService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.cd.detectChanges();
  }
}
