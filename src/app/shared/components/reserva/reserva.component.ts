import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Reserva } from '../../../core/models/reserva';
import { AuthSesionService } from '../../../core/service/sesion/auth-sesion.service';
import { ReservaService } from '../../../core/service/reserva/reserva.service';
import { response } from 'express';


@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl:'./reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  @Input() alojamientoId!: number;

  reserva : Reserva = {
    alojamiento : 0,
    usuario :  0,
    fecha_inicio: null,
    fecha_termino : null
  }

  rentalValue: number | null = null;
  daysCount: number | null = null;
  readonly pricePerNight = 100000; // Define el precio por noche aquí

  constructor(
    private authsesion : AuthSesionService,
    private reservaservice : ReservaService
  ) { }


  ngOnInit() {
    this.setMinDate();
    console.log('Alojamiento ID recibido:', this.alojamientoId);
  }

  setMinDate() {
    const today = new Date().toISOString().split('T')[0];
    const startDateInput = <HTMLInputElement>document.getElementById('startDate');
    const endDateInput = <HTMLInputElement>document.getElementById('endDate');
    
    startDateInput.min = today;
    endDateInput.min = today;
  }

  calculateRent() {
    const startDateInput = (<HTMLInputElement>document.getElementById('startDate')).value;
    const endDateInput = (<HTMLInputElement>document.getElementById('endDate')).value;

    if (startDateInput && endDateInput) {
      const startDate = new Date(startDateInput);
      const endDate = new Date(endDateInput);
      const timeDifference = endDate.getTime() - startDate.getTime();
      const days = timeDifference / (1000 * 3600 * 24);

      if (days > 0) {
        this.rentalValue = days * this.pricePerNight; // Calcula el valor del arriendo
        this.daysCount = days;
      } else {
        alert('La fecha de fin debe ser posterior a la fecha de inicio.');
        this.rentalValue = null;
        this.daysCount = null;
      }
    } else {
      this.rentalValue = null;
      this.daysCount = null;
    }
  }

  reserveHere() {
    if (this.daysCount !== null && this.rentalValue !== null) {
      Swal.fire({
        title: 'Reserva Confirmada',
        text: `Has reservado ${this.daysCount} días por un total de ${this.rentalValue.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, selecciona las fechas correctamente.',
        icon: 'error',
        confirmButtonText: 'Volver a intentar'
      });
    }
  }
  
  enviarReserva(){
    this.reserva.alojamiento = this.alojamientoId;
    if (this.authsesion.obtenerInfoUsuario() !== null){
        this.reserva.usuario = this.authsesion.obtenerInfoUsuario();
    }
    this.reservaservice.createReserva(this.reserva).subscribe(response => {
      console.log(response)
      console.log(this.reserva);
    })
  }
}
