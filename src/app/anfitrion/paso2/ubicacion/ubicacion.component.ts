import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import * as L from 'leaflet';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Alojamiento } from '../../../core/models/Alojamiento';
import { FormAlojamientoService } from '../../../core/service/alojamiento/form-alojamiento.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class UbicacionComponent implements OnInit, AfterViewInit {
  map!: L.Map;
  marker!: L.Marker;
  searchPerformed = false;  // Variable para rastrear si se realizó una búsqueda

  formData = {
    direccion: ''
  };

  constructor(
    private router: Router,
    private formalojamiento: FormAlojamientoService
  ) {
    const savedData = this.formalojamiento.getFormData();
    this.formData.direccion = savedData.direccion || '';
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initMap();
    if (this.formData.direccion) {
      this.searchAddress(this.formData.direccion);
    }
  }

  private initMap(): void {
    this.map = L.map('map').setView([-33.4372, -70.6506], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  private searchAddress(address: string): void {
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
          this.marker = L.marker([lat, lon]).addTo(this.map).bindPopup(address).openPopup();
          this.searchPerformed = true;  // Marca la búsqueda como realizada
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Dirección no encontrada. Por favor ingresa una dirección válida.',
            icon: 'error',
            confirmButtonText: 'Entendido'
          });
        }
      })
      .catch(error => {
        console.error('Error:', error);
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error al buscar la dirección.',
          icon: 'error',
          confirmButtonText: 'Entendido'
        });
      });
  }

  onSubmit(): void {
    const address = this.formData.direccion;
    if (!address.trim()) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, ingresa una dirección.',
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
      return;
    }
    this.searchAddress(address);
    this.formalojamiento.setFormData({ direccion: address });
  }

  clearMap(): void {
    if (this.map) {
      this.map.remove();
      this.formData.direccion = '';
    }
    if (this.marker) {
      this.marker.remove();
    }
    this.initMap();
    this.searchPerformed = false;  // Marca la búsqueda como no realizada
  }

  navigateToDatosbasicos(): void {
    if (!this.formData.direccion.trim() || !this.searchPerformed) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, ingresa una dirección y presiona "Buscar" antes de continuar.',
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
      return;
    }
    this.router.navigate(['/anfitrion/datosbasicos']);
  }

  navigateToPaso2(): void {
    if (!this.formData.direccion.trim() || !this.searchPerformed) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, ingresa una dirección y presiona "Buscar" antes de continuar.',
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
      return;
    }
    this.router.navigate(['/anfitrion/paso2']);
  }
}
