import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  rentalValue: number | null = null;
  daysCount: number | null = null;
  readonly pricePerNight = 100000; // Define el precio por noche aquí

  ngOnInit() {
    this.setMinDate();
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
      alert(`Has reservado ${this.daysCount} días por un total de ${this.rentalValue.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}`);
    } else {
      alert('Por favor, selecciona las fechas correctamente.');
    }
  }
}
