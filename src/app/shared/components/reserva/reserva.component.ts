import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Reserva } from '../../../core/models/reserva';
import { AuthSesionService } from '../../../core/service/sesion/auth-sesion.service';
import { ReservaService } from '../../../core/service/reserva/reserva.service';
import { AlojamientoService } from '../../../core/service/alojamiento/alojamiento.service';
import { AlojamientoDetails } from '../../../core/models/Alojamiento';
declare var $: any; // Declara jQuery para su uso


@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  @Input() alojamientoId!: number;
  @Input() alojamientoPrecio!: number;
  @Input() alojamientoNombre!: string;

  reserva: Reserva = {
    alojamiento: 0,
    usuario: 0,
    fecha_inicio: null,
    fecha_fin: null,
    total: 0
  };

  rentalValue: number | null = null;
  daysCount: number | null = null;
  pricePerNight: number | null = null;
  guestCount: number | null = null;
  hasPet: boolean = false;
  formData: AlojamientoDetails | null = null;
  maxHuespedes: number | null = null;
  permiteMascotas: boolean = false;
  modalInstance: any; // Referencia al modal

  constructor(
    private authsesion: AuthSesionService,
    private reservaservice: ReservaService,
    private alojamientoService: AlojamientoService
  ) { }

  ngOnInit() {
    this.setMinDate();
    this.loadAlojamientoDetails(this.alojamientoId);
  }

  setMinDate() {
    const today = new Date().toISOString().split('T')[0];
    const startDateInput = document.getElementById('startDate') as HTMLInputElement;
    const endDateInput = document.getElementById('endDate') as HTMLInputElement;

    startDateInput.min = today;
    endDateInput.min = today;
  }

  loadAlojamientoDetails(id: number): void {
    this.alojamientoService.getAlojamientoDetails(id).subscribe(
      (details: AlojamientoDetails) => {
        this.formData = details;
        this.maxHuespedes = details.huespedes;
        this.permiteMascotas = details.mascotas;
        console.log(this.formData);
      },
      (error) => {
        console.error('Error al cargar los detalles del alojamiento', error);
      }
    );
  }

  calculateRent() {
    const startDateInput = (document.getElementById('startDate') as HTMLInputElement).value;
    const endDateInput = (document.getElementById('endDate') as HTMLInputElement).value;
  
    if (startDateInput && endDateInput && this.formData) {
      const startDate = new Date(startDateInput);
      const endDate = new Date(endDateInput);
      const timeDifference = endDate.getTime() - startDate.getTime();
      const days = timeDifference / (1000 * 3600 * 24);
  
      if (days > 0) {
        this.pricePerNight = this.formData.precio;
        this.rentalValue = days * this.pricePerNight;
        this.daysCount = days;
  
        // Validar el número de huéspedes
        if (this.guestCount && this.maxHuespedes !== null && this.guestCount > this.maxHuespedes) {
          Swal.fire({
            title: 'Error',
            text: `El número máximo de huéspedes permitidos es ${this.maxHuespedes}.`,
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
          this.guestCount = null; // Reiniciar el número de huéspedes
        }
  
        // Validar el número de mascotas
        if (this.hasPet && !this.permiteMascotas) {
          Swal.fire({
            title: 'Error',
            text: 'Este alojamiento no permite mascotas.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
          this.hasPet = false; // Reiniciar la selección de mascotas
        }
      } else {
        Swal.fire({
          title: 'Error',
          text: 'La fecha de fin debe ser posterior a la fecha de inicio.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        this.rentalValue = null;
        this.daysCount = null;
      }
    } else {
      this.rentalValue = null;
      this.daysCount = null;
    }
  }

  openModal() {
    if (!this.authsesion.isLoggin){
      Swal.fire({ // Mostrar el mensaje de éxito usando SweetAlert
        title: 'Login',
        text: 'Por favor ingresa a la aplicación',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        // Aquí podrías realizar alguna acción adicional después de que el usuario hace clic en Aceptar
      });
    }
    else {
      $('#reservaModal').modal('show');
  }
}

  confirmarReserva() {
    if (this.daysCount !== null && this.rentalValue !== null && this.guestCount !== null && this.formData) {
      this.enviarReserva();
    }
  }

  enviarReserva() {
    this.reserva.alojamiento = this.alojamientoId;
    this.reserva.total = this.rentalValue;
    if (this.authsesion.obtenerIdUsuario() !== null) {
      this.reserva.usuario = this.authsesion.obtenerIdUsuario();
    }
    this.reservaservice.createReserva(this.reserva).subscribe(response => {
      console.log(response);
      console.log(this.reserva);
      this.closeModalAndShowSuccess();
    });
  }

  closeModalAndShowSuccess() {
    $('#reservaModal').modal('hide'); // Cerrar el modal usando jQuery
    Swal.fire({ // Mostrar el mensaje de éxito usando SweetAlert
      title: 'Reserva Confirmada',
      text: 'Disfruta tu estadía',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    }).then(() => {
      // Aquí podrías realizar alguna acción adicional después de que el usuario hace clic en Aceptar
    });
  }
}
