import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../../models/reserva';


@Injectable({
  providedIn: 'root'
})
export class ReservaService {


  apiReserva = 'http://127.0.0.1:8000/api/skybnb/create-reserva'

  constructor(
    private http: HttpClient
  ) { }

  createReserva( reserva : Reserva ): Observable<Reserva>{
    return this.http.post<Reserva>(this.apiReserva,reserva)
  }

}
