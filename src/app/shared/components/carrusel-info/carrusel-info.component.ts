import { Component, AfterViewInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-carrusel-info',
  standalone: true,
  templateUrl: './carrusel-info.component.html',
  styleUrls: ['./carrusel-info.component.css']
})
export class CarruselInfoComponent implements AfterViewInit {
  mainCarousel!: Splide;

  constructor() {}

  

  ngAfterViewInit() {
    this.mainCarousel = new Splide('#image-carousel', {
      type       : 'fade',
      heightRatio: 0.5,
      pagination : false,
      arrows     : false,
      cover      : true,
    }).mount();

    const thumbnailCarousel = new Splide('#thumbnail-carousel', {
      fixedWidth  : 150, /* Increase width for larger thumbnails */
      fixedHeight : 100, /* Increase height for larger thumbnails */
      isNavigation: true,
      gap         : 10,
      focus       : 'center',
      pagination  : false,
      cover       : true,
      breakpoints : {
        600: {
          fixedWidth : 100, /* Smaller thumbnails for mobile view */
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
