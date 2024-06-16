import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicio } from '../../models/Servicios';

  @Injectable({
    providedIn: 'root'
  })
  export class ServicioService {
    private apiUrl = 'http://127.0.0.1:8000/api/skybnb/list-servicios';
  
    constructor(private http: HttpClient) { }
  
    getServicios(): Observable<Servicio[]> {
      return this.http.get<Servicio[]>(this.apiUrl);
    }
  }
  