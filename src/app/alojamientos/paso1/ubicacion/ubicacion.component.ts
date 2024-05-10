import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import mapboxgl from 'mapbox-gl'; // Importa mapbox-gl

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css'],
})
export class UbicacionComponent implements OnInit {
  map: mapboxgl.Map; // Variable para almacenar el mapa
  @ViewChild('ubicacionInput', { static: true }) ubicacionInput!: ElementRef<HTMLInputElement>; // Inicializa la propiedad ubicacionInput

  constructor(private router: Router) {
    this.map = {} as mapboxgl.Map; // Inicializa la propiedad map en el constructor
  }

  ngOnInit(): void {
    this.initMap();
  }

  async guardarUbicacion(): Promise<void> {
    const ubicacion = this.ubicacionInput.nativeElement.value;
    if (ubicacion) {
      // Resto del código para guardar la ubicación...
      console.log('Ubicación guardada:', ubicacion);
      // Luego de guardar la ubicación, puedes redirigir al usuario a la siguiente página
      // this.router.navigate(['/datosbasicos']);
    } else {
      console.error('La ubicación no puede estar vacía');
    }
  }

  initMap(): void {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0aWFzY2FsaXN0byIsImEiOiJjbHZ4NG1ycnYwNmY0MmtzNDh5cjZyd3FrIn0.cQq48QNu_te4hmvF4ASxmQ'; // Reemplaza TU_ACCESS_TOKEN con tu token de acceso a Mapbox
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', // Reemplaza con el estilo de mapa que desees
      center: [-70.6475, -33.4372], // Longitud y latitud del centro del mapa (Santiago, Chile)
      zoom: 12
    });

    // Agrega el marcador
    new mapboxgl.Marker().setLngLat([-70.6475, -33.4372]).addTo(this.map);
  }

  navigateToDatosbasicos() {
    // Redirige a la página de ubicación y pasa el objeto nuevoAlojamiento
    this.router.navigate(['/datosbasicos'], {});
  }
}
