import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthSesionService {

  constructor(private http: HttpClient) { }

  apiRegistro = 'http://127.0.0.1:8000/api/skybnb/register'


  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiRegistro, user)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }


  login(user: User): boolean {
    const users = this.getUsers();
    const authenticatedUser = users.find(u => u.email === user.email && u.password === user.password);
    if (authenticatedUser) {
      localStorage.setItem('currentUser', authenticatedUser.email);
      return true;
    }
    return false;
  }

  private getUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  isLoggin(): boolean{
    const token = localStorage.getItem('currentUser')
    return !!token;
  }

  obtenerCorreo(): string | null {
    return localStorage.getItem('currentUser');
  }

  logout(){
    return localStorage.removeItem('currentUser')
  }

}

