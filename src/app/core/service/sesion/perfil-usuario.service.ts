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

  obtenerPerfil(usuarioEmail: string): Observable<any> { // Acepta string
    return this.http.get<any>(`${this.apiUrl}/perfil/${usuarioEmail}`);
  }

  guardarPerfil(datosPerfil: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-perfil-usuario`, datosPerfil);
  }
}