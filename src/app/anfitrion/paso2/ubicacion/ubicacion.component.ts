import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Asegúrate de importar Validators
import * as L from 'leaflet';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; // Importa SweetAlert2

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

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.locationForm = this.formBuilder.group({
      address: ['', Validators.required] // Asegúrate de que el campo es requerido
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
    if (address) {
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
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Por favor ingresa una dirección antes de buscar.',
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
    }
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
    if (this.locationForm.valid && this.marker) {
      this.router.navigate(['/anfitrion/datosbasicos'], {});
    } else {
      Swal.fire({
        title: 'Atención',
        text: 'Por favor ingresa una dirección válida y busca su ubicación en el mapa antes de continuar.',
        icon: 'warning',
        confirmButtonText: 'Entendido',
        customClass: {
          popup: 'swal2-popup',
          title: 'swal2-title',
          confirmButton: 'swal2-confirm'
        }
      });
    }
  }

  navigateToPaso2() {
    this.router.navigate(['/anfitrion/paso2'], {});
  }
}
