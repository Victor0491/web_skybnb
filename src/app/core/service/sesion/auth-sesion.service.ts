import { Injectable } from '@angular/core';
import { User } from '../../models/User';
@Injectable({
  providedIn: 'root'
})
export class AuthSesionService {

  constructor() { }

  register(user: User): boolean {
    const users = this.getUsers();
    if (users.find(u => u.correo === user.correo)) {
      return false; // El usuario ya está registrado
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  login(user: User): boolean {
    const users = this.getUsers();
    const authenticatedUser = users.find(u => u.correo === user.correo && u.password === user.password);
    if (authenticatedUser) {
      localStorage.setItem('currentUser', authenticatedUser.correo);
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

