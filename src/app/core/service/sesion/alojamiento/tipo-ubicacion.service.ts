import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TipoUbicacion {
  id: number;
  nombre: string;
  image: string; // Cambiamos la propiedad a 'image'
}

@Injectable({
  providedIn: 'root'
})
export class TipoUbicacionService {
  private apiUrl = 'http://127.0.0.1:8000/api/skybnb/list-ubicacion';

  constructor(private http: HttpClient) { }

  getUbicaciones(): Observable<TipoUbicacion[]> {
    return this.http.get<TipoUbicacion[]>(this.apiUrl);
  }
}