import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from '../../models/User';
import { AuthSesionService } from '../sesion/auth-sesion.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

    ApiProfile = 'http://127.0.0.1:8000/api/skybnb/perfilusuario/'

  constructor(
    private http: HttpClient,
    private authsesion : AuthSesionService
  ) { }

  getProfileUser(id:number):Observable<UserProfile>{
    const url = `${this.ApiProfile}${id}/`;
    const token = this.authsesion.obtenerToken() || '';

    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });

    return this.http.get<UserProfile>(url,{ headers });
  }

  UpdateProfileUser(){

  }

  guardarPreferencias(preferencias: any): void {
    localStorage.setItem('preferencias', JSON.stringify(preferencias));
    console.log('Preferencias guardadas en localStorage', preferencias);
  }

  obtenerPreferencias(): any {
    const preferencias = localStorage.getItem('preferencias');
    return preferencias ? JSON.parse(preferencias) : null;
  }
}
