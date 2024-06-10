import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TipoAlojamiento {
    id: number;
    nombre: string;
    image: string; // Cambiamos la propiedad a 'image'
  }

@Injectable({
  providedIn: 'root'
})
export class TipoAlojamientoService {
  private apiUrl = 'http://127.0.0.1:8000/api/skybnb/list-tipo-alojamiento';

  constructor(private http: HttpClient) { }

  getTiposAlojamiento(): Observable<TipoAlojamiento[]> {
    return this.http.get<TipoAlojamiento[]>(this.apiUrl);
  }
}