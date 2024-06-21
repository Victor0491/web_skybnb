import { Component, OnInit, AfterViewInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Asegúrate de importar Validators
=======
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
>>>>>>> 7c50df9e35c33003fb8120dfa34360783e1a7124
import * as L from 'leaflet';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
import Swal from 'sweetalert2'; // Importa SweetAlert2
=======
import { Alojamiento } from '../../../core/models/Alojamiento';
import { FormAlojamientoService } from '../../../core/service/alojamiento/form-alojamiento.service';

>>>>>>> 7c50df9e35c33003fb8120dfa34360783e1a7124

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
})
export class UbicacionComponent implements OnInit, AfterViewInit {
  map!: L.Map;
  marker!: L.Marker;

<<<<<<< HEAD
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.locationForm = this.formBuilder.group({
      address: ['', Validators.required] // Asegúrate de que el campo es requerido
    });
=======

  formData = {
    direccion : ''
  };

  constructor(
    private router: Router,
    private formalojamiento: FormAlojamientoService) {
    const savedData = this.formalojamiento.getFormData();
    this.formData.direccion = savedData.direccion || '';
>>>>>>> 7c50df9e35c33003fb8120dfa34360783e1a7124
  }


  ngOnInit(): void {}

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

<<<<<<< HEAD
  onSubmit(): void {
    const address = this.locationForm.value.address;
    if (address) {
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
        .then(response => response.json())
        .then(data => {
          if (data && data.length > 0) {
            const lat = parseFloat(data[0].lat);
            const lon = parseFloat(data[0].lon);
=======
  private searchAddress(address: string): void {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lon = parseFloat(data[0].lon);
>>>>>>> 7c50df9e35c33003fb8120dfa34360783e1a7124

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
<<<<<<< HEAD
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
=======
          this.map.setView([lat, lon], 15);
          this.marker = L.marker([lat, lon]).addTo(this.map).bindPopup(address).openPopup();
        } else {
          alert('Dirección no encontrada');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al buscar la dirección.');
>>>>>>> 7c50df9e35c33003fb8120dfa34360783e1a7124
      });
    }
  }

  onSubmit(): void {
    const address = this.formData.direccion;
    this.searchAddress(address);

    // Guardar la dirección en formData y actualizar el servicio
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
  }

<<<<<<< HEAD
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
=======
  navigateToDatosbasicos(): void {
    this.router.navigate(['/anfitrion/datosbasicos']);
  }

  navigateToPaso2(): void {
    this.router.navigate(['/anfitrion/paso2']);
  }
}
>>>>>>> 7c50df9e35c33003fb8120dfa34360783e1a7124
