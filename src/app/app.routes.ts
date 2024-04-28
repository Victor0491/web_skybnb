import { Routes } from '@angular/router';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';
import { Paso1Component } from './alojamientos/paso1/paso1.component';

export const routes: Routes = [
  { path: 'alojamientos', component: AlojamientosComponent },
  { path: 'paso1', component: Paso1Component }, 
  // Puedes agregar más rutas aquí si es necesario
];
