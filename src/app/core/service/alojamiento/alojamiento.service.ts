import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alojamiento } from '../../models/Alojamiento';// Asegúrate de ajustar el path según tu estructura de archivos
import { ListAlojamiento } from '../../models/Alojamiento';

@Injectable({
  providedIn: 'root'
})
export class AlojamientoService {
  private apiUrl = 'http://127.0.0.1:8000/api/skybnb/create-alojamiento';

  private apiListAlojamiento = 'http://127.0.0.1:8000/api/skybnb/list-alojamiento'


  constructor(private http: HttpClient) {}

  createAlojamiento(alojamiento: Alojamiento): Observable<Alojamiento> {
    return this.http.post<Alojamiento>(this.apiUrl, alojamiento);
  }

  listAlojamiento(listalojamiento: ListAlojamiento): Observable<ListAlojamiento>{
    return this.http.get<Alojamiento>(this.apiListAlojamiento,listalojamiento)
  }
  
}