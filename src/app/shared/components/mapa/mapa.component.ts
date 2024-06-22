import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  standalone: true,
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Coordenadas para centrar el mapa
    const lat = -36.947;  // Cambia esto a la latitud deseada
    const lng = -69.763;  // Cambia esto a la longitud deseada
    const zoomLevel = 15; // Ajusta el nivel de zoom para una vista más cercana

    // Crear el mapa y centrarlo en las coordenadas especificadas
    const map = L.map('map').setView([lat, lng], zoomLevel);

    // Agregar la capa de mapa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  }
}
