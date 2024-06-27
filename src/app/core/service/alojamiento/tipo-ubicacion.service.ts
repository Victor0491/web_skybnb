import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoUbicacion } from '../../models/TipoUbicacion';

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