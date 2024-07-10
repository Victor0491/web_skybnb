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

    ApiUpdateProfile = 'http://127.0.0.1:8000/api/skybnb/perfilusuario/update-profile/'

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
    const id_user = this.authsesion.obtenerIdUsuario()
    const token = this.authsesion.obtenerToken() || '';

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const preferencias = this.ObtenerDatosParaActualizar();
    if (!preferencias) {
      throw new Error('No se encontraron preferencias en localStorage');
    }

    const body = {
      ...preferencias,
      usuario: id_user

    };
    return this.http.put<UserProfile>(this.ApiUpdateProfile,body,{ headers })
  }

  guardarPreferencias(preferencias: any): void {
    localStorage.setItem('preferencias', JSON.stringify(preferencias));
    console.log('Preferencias guardadas en localStorage', preferencias);
    if (this.authsesion.isLoggin()) {
      console.log('hola')
      this.UpdateProfileUser().subscribe(
        response => {
          console.log('Perfil actualizado exitosamente:', response);
        },
        error => {
          console.error('Error al actualizar el perfil:', error);
        }
      );
    }
  }

  obtenerPreferencias(): any {
    const preferencias = localStorage.getItem('preferencias');
    return preferencias ? JSON.parse(preferencias) : null;
  }

  IsDataPref(): boolean{
    const pref = localStorage.getItem('preferencias')
    return !!pref
  }

  obtenerPreferenciasNumericas(): number[] {
    const preferencias = this.obtenerPreferencias();
    if (!preferencias) {
      return [];
    }
    
    const tipoalojamiento = +preferencias.tipoalojamiento || 0;
    const ubicacion = +preferencias.ubicacion || 0;
    const actividades = preferencias.actividad.map((actividad: any) => +actividad || 0);
    const instance = [tipoalojamiento, ubicacion, ...actividades];
    return instance
  }


  ObtenerDatosParaActualizar(){
    const preferencias = this.obtenerPreferencias();
    if (!preferencias) {
      return null;
    }
    
    const tipoalojamiento = [preferencias.tipoalojamiento] || [];
    const ubicacion = [preferencias.ubicacion] || [];
    const actividades = preferencias.actividad.map((actividad: any) => actividad || 0);
    
    return { tipoalojamiento, ubicacion, actividades };
  }

  
}
  
