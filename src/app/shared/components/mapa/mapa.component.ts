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
    if (changes['direccion']) {
      this.updateMap(this.direccion);
    }
  }

  private updateMap(direccion: string): void {
    this.geocodeAddress(direccion).subscribe((coordinates: { lat: number; lon: number }) => {
      this.map.setView([coordinates.lat, coordinates.lon], 15);
      L.marker([coordinates.lat, coordinates.lon]).addTo(this.map)
        .bindPopup(direccion)
        .openPopup();
    });
  }

  private geocodeAddress(address: string): Observable<{ lat: number; lon: number }> {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}`;
    return this.http.get<any[]>(url).pipe(
      map(results => {
        if (results.length > 0) {
          return { lat: results[0].lat, lon: results[0].lon };
        } else {
          throw new Error('No se encontraron resultados de geocodificación');
        }
      })
    );
  }
}
