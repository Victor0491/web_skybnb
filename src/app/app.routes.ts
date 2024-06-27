import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeAlojamientosComponent } from './home/home-alojamientos/home-alojamientos.component';
import { AlojamientoDetailComponent } from './alojamientos/alojamiento-detail/alojamiento-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


export const routes: Routes = [
  {
    path: 'anfitrion',
    loadChildren: () => import('./anfitrion/auth.routes').then(m => m.AUTH_ROUTES),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES),
  },
  {
    path: 'rooms',
    loadChildren: () => import('./alojamientos/auth.routes').then(m => m.AUTH_ROUTES),
  },
  {
    path: '',
    component: HomeAlojamientosComponent,
  },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'alojamiento-detail/:id', component: AlojamientoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

