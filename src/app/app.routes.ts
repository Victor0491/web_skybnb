import { Routes } from '@angular/router';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';
import { Paso1Component } from './alojamientos/paso1/paso1.component';
import  { ModalComponent} from './modal/modal.component';
import  { DescripcionComponent} from './alojamientos/paso1/descripcion/descripcion.component';


export const routes: Routes = [
  { path: 'alojamientos', component: AlojamientosComponent },
  { path: 'paso1', component: Paso1Component }, 
  { path: 'modal', component: ModalComponent }, 
  { path: 'descripcion', component: DescripcionComponent }, 
  // Puedes agregar más rutas aquí si es necesario
];
