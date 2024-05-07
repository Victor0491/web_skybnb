import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet'; // Importa la biblioteca Leaflet

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit(): void {
    // Inicializa el mapa
    const map = L.map('map').setView([51.505, -0.09], 13); // Asigna una vista inicial al mapa

    // Agrega una capa de mapa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Agrega un marcador en una ubicación específica
    L.marker([51.5, -0.09]).addTo(map) // Agrega el marcador al mapa
      .bindPopup('Hello World') // Abre un popup con el mensaje 'Hello World'
      .openPopup(); // Abre el popup automáticamente
  }
}
