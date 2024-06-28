import { Injectable } from '@angular/core';
import { User } from '../../models/User';
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


  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiRegistro, user)
    .pipe(
    );
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

  obtenerInfoUsuario(){
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

