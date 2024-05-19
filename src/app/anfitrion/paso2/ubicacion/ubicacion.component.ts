import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as L from 'leaflet';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class UbicacionComponent implements OnInit, AfterViewInit {
  map!: L.Map;
  marker!: L.Marker;
  locationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router) {}

  ngOnInit(): void {
    this.locationForm = this.formBuilder.group({
      address: ['']
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([-33.4372, -70.6506], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Forzar redimensión del mapa después de la inicialización
    this.map.invalidateSize();
  }

  onSubmit(): void {
    const address = this.locationForm.value.address;
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lon = parseFloat(data[0].lon);

          if (this.marker) {
            this.map.removeLayer(this.marker);
          }
          this.map.setView([lat, lon], 15);
          this.marker = L.marker([lat, lon]).addTo(this.map);
        } else {
          alert('Dirección no encontrada');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al buscar la dirección.');
      });
  }

  clearMap(): void {
    if (this.map) {
      this.map.remove();
    }
    if (this.marker) {
      this.marker.remove();
    }
    this.initMap(); // Vuelve a inicializar el mapa en la coordenada predefinida 
  }

  navigateToDatosbasicos() {
    // Redirige a la página de ubicación y pasa el objeto nuevoAlojamiento
    this.router.navigate(['/anfitrion/datosbasicos'], {});
  }

  navigateToPaso2() {
    // Redirige a la página de ubicación y pasa el objeto nuevoAlojamiento
    this.router.navigate(['/anfitrion/paso2'], {});
  }
}


