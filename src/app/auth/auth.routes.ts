import { Component } from '@angular/core';
import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PerfilUsuarioComponent } from '../shared/components/moda-perfil-usuario/modal-perfil-usuario.component';

export const AUTH_ROUTES: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];