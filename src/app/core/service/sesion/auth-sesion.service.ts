import { Injectable } from '@angular/core';
import { RegisterResponse, User, PartialUserProfile } from '../../models/User';
import { LoginResponse } from '../../models/LoginResponse';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError  } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { jwtDecode } from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthSesionService {

  constructor(private http: HttpClient) { }

  apiRegistro = 'http://127.0.0.1:8000/api/skybnb/register'

  apiLogin = 'http://127.0.0.1:8000/api/skybnb/login/'

  apiCrearPerfil = 'http://127.0.0.1:8000/api/skybnb/create-perfil-usuario'


  register(user: User): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.apiRegistro, user);
  }

  CrearPerfil(profile: PartialUserProfile): Observable <PartialUserProfile>{
    return this.http.post<PartialUserProfile>(this.apiCrearPerfil, profile)
  }

  login(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiLogin, user).pipe(
      tap((response: LoginResponse) => {
        // Guarda el token en localStorage
        localStorage.setItem('token', response.accessToken);
      }),
    );
  }


  obtenerToken(){
    const token = localStorage.getItem('token')
    return token
  }

  obtenerIdUsuario(){
    const info = localStorage.getItem('token')
    if (info){
      const decodeInfo: any = jwtDecode(info);

      const IdUsuario = decodeInfo.user_id;
      return IdUsuario
    }
  }

  ObtenerInfoRoles(){
    const info = localStorage.getItem('token')
    if (info){
      const decodeInfo: any = jwtDecode(info);
      const rolesUsuario = decodeInfo.roles;
      return rolesUsuario
    }
  }

  isLoggin(): boolean{
    const token = localStorage.getItem('token')
    return !!token;
  }


  logout(){
    return localStorage.removeItem('token')
  }

}

