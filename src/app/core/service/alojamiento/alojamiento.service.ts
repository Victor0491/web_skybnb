import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alojamiento, AlojamientoDetails } from '../../models/Alojamiento'; // Ajusta el path según tu estructura de archivos
import { ListAlojamiento } from '../../models/Alojamiento';

@Injectable({
  providedIn: 'root'
})
export class AlojamientoService {
  private apiUrl = 'http://127.0.0.1:8000/api/skybnb/create-alojamiento';
  private apiListAlojamiento = 'http://127.0.0.1:8000/api/skybnb/list-alojamiento';
  private apiDetailsAlojamiento = 'http://127.0.0.1:8000/api/skybnb/list-alojamiento-details/';
  private apiListAlojamientoCelula = 'http://127.0.0.1:8000/api/skybnb/list-alojamiento-celula';

  constructor(private http: HttpClient) {}

  createAlojamiento(alojamiento: Alojamiento): Observable<Alojamiento> {
    return this.http.post<Alojamiento>(this.apiUrl, alojamiento);
  }

  getAlojamientos(): Observable<ListAlojamiento[]> {
    return this.http.get<ListAlojamiento[]>(this.apiListAlojamiento);
  }
  
  getAlojamientoDetails(id: number): Observable<AlojamientoDetails> {
    const url = `${this.apiDetailsAlojamiento}${id}/`;
    return this.http.get<AlojamientoDetails>(url);
  }

  getKnnPrediction(instance: number[]): Observable<any> {
    return this.http.post<any>(this.apiListAlojamientoCelula, { instance });
  }
}
