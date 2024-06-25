import { Component, AfterViewInit, Input } from '@angular/core';
import Splide from '@splidejs/splide';
import { CommonModule } from '@angular/common';
import { ObjectToArrayPipe } from '../../../core/pipe/object-to-array.pipe';

@Component({
  selector: 'app-carrusel-info',
  standalone: true,
  templateUrl: './carrusel-info.component.html',
  styleUrls: ['./carrusel-info.component.css'],
  imports: [CommonModule, ObjectToArrayPipe],
})
export class CarruselInfoComponent implements AfterViewInit {
  @Input() imagenes: string[] = [];

  mainCarousel!: Splide;

  constructor() {}

  ngAfterViewInit() {
    this.mainCarousel = new Splide('#image-carousel', {
      type: 'fade',
      heightRatio: 0.5,
      pagination: false,
      arrows: false,
      cover: true,
    }).mount();

    const thumbnailCarousel = new Splide('#thumbnail-carousel', {
      fixedWidth: 150,
      fixedHeight: 100,
      isNavigation: true,
      gap: 10,
      focus: 'center',
      pagination: false,
      cover: true,
      breakpoints: {
        600: {
          fixedWidth: 100,
          fixedHeight: 66,
        },
      },
    }).mount();

    thumbnailCarousel.sync(this.mainCarousel);
  }

  changeMainImage(index: number) {
    this.mainCarousel.go(index);
  }
}
