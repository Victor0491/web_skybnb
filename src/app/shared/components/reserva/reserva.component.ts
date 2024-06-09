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

  ngOnInit() {
    this.setMinDate();
  }

  setMinDate() {
    const today = new Date().toISOString().split('T')[0];
    const startDateInput = (<HTMLInputElement>document.getElementById('startDate'));
    const endDateInput = (<HTMLInputElement>document.getElementById('endDate'));
    
    startDateInput.min = today;
    endDateInput.min = today;
  }

  calculateRent() {
    const startDateInput = (<HTMLInputElement>document.getElementById('startDate')).value;
    const endDateInput = (<HTMLInputElement>document.getElementById('endDate')).value;
    const personsInput = (<HTMLInputElement>document.getElementById('persons')).value;

    if (startDateInput && endDateInput && personsInput) {
      const startDate = new Date(startDateInput);
      const endDate = new Date(endDateInput);
      const days = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
      const persons = parseInt(personsInput);

      if (days > 0) {
        // Se asume que el valor diario es de 10,000 pesos por persona
        this.rentalValue = days * persons * 10000;
        this.daysCount = days;
      } else {
        alert('La fecha de fin debe ser posterior a la fecha de inicio.');
        this.daysCount = null;
      }
    }
  }
}
