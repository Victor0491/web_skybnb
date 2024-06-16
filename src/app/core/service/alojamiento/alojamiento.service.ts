import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alojamiento } from '../../models/Alojamiento';// Asegúrate de ajustar el path según tu estructura de archivos

@Injectable({
  providedIn: 'root'
})
export class AlojamientoService {
  private apiUrl = 'http://127.0.0.1:8000/api/skybnb/create-alojamiento';

  
  constructor(private http: HttpClient) {}

  createAlojamiento(alojamiento: Alojamiento): Observable<Alojamiento> {
    return this.http.post<Alojamiento>(this.apiUrl, alojamiento);
  }
}