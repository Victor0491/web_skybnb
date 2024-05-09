import { Routes } from '@angular/router';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';
import { Paso1Component } from './alojamientos/paso1/paso1.component';
import { ModalComponent } from './modal/modal.component';
import { DescripcionComponent } from './alojamientos/paso1/descripcion/descripcion.component';
import { UbicacionComponent } from './alojamientos/paso1/ubicacion/ubicacion.component';
import { DatosbasicosComponent } from './alojamientos/paso1/datosbasicos/datosbasicos.component';

export const routes: Routes = [
  { path: 'alojamientos', component: AlojamientosComponent },
  { path: 'paso1', component: Paso1Component },
  { path: 'modal', component: ModalComponent },
  { path: 'descripcion', component: DescripcionComponent },
  { path: 'ubicacion', component: UbicacionComponent },
  { path: 'datosbasicos', component: DatosbasicosComponent },
  // Puedes agregar más rutas aquí si es necesario
];
