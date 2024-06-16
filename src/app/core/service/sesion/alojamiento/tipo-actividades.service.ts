
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TipoActividad {
  id: number;
  nombre: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class TipoActividadService {
  private apiUrl = 'http://127.0.0.1:8000/api/skybnb/list-actividades';

  constructor(private http: HttpClient) { }

  getActividad(): Observable<TipoActividad[]> {
    return this.http.get<TipoActividad[]>(this.apiUrl);
  }
}