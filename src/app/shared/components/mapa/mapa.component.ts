import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mapa',
  standalone: true,
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, OnChanges {
  @Input() direccion: string = '';

  private map!: L.Map;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Crear el mapa y establecer una vista predeterminada
    this.map = L.map('map').setView([0, 0], 2); // Vista inicial, cambiará cuando obtengamos la dirección
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['direccion'] && changes['direccion'].currentValue) {
      this.updateMap(this.direccion);
    }
  }

  private updateMap(direccion: string): void {
    this.geocodeAddress(direccion).subscribe((coordinates: { lat: number; lon: number }) => {
      console.log('Coordenadas obtenidas:', coordinates); // Verificar las coordenadas
      this.map.setView([coordinates.lat, coordinates.lon], 15);
      this.map.invalidateSize(); // Asegurarse de que el mapa se redimensione correctamente
      // Añadir un círculo semitransparente en lugar de un marcador
      L.circle([coordinates.lat, coordinates.lon], {
        color: '#00add0', // Color del borde del círculo
        fillColor: '#00add0', // Color de relleno del círculo
        fillOpacity: 0.5, // Opacidad del relleno
        radius: 500 // Radio en metros, ajusta según tus necesidades
      }).addTo(this.map);
    });
  }

  private geocodeAddress(address: string): Observable<{ lat: number; lon: number }> {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}`;
    return this.http.get<any[]>(url).pipe(
      map(results => {
        if (results.length > 0) {
          return { lat: parseFloat(results[0].lat), lon: parseFloat(results[0].lon) };
        } else {
          throw new Error('No se encontraron resultados de geocodificación');
        }
      })
    );
  }
}
