import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PerfilUsuario } from '../../models/PerfilUsuario';


@Injectable({
  providedIn: 'root'
})
export class PerfilUsuarioService {
  private apiUrl = 'http://127.0.0.1:8000/api/skybnb/create-perfil-usuario';

  
  constructor(private http: HttpClient) {}

  obtenerPerfil(usuarioId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/perfil/${usuarioId}`);
  }

  guardarPerfil(datosPerfil: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/perfil`, datosPerfil);
  }
}