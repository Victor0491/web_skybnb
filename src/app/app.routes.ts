import { Routes } from '@angular/router';
import { HomeAlojamientosComponent } from './home/home-alojamientos/home-alojamientos.component';
import { AlojamientoDetailComponent } from './alojamientos/alojamiento-detail/alojamiento-detail.component';

export const routes: Routes = [

    {
        path: 'anfitrion',
        loadChildren: () => import ('./anfitrion/auth.routes').then(m => m.AUTH_ROUTES),
    },
    {
        path: 'auth',
        loadChildren: () => import ('./auth/auth.routes').then(m => m.AUTH_ROUTES),
    },
    {
        path: 'rooms',
        loadChildren: () => import ('./alojamientos/auth.routes').then(m => m.AUTH_ROUTES),
    },
    {
        path: '',
        component: HomeAlojamientosComponent,
    },
];
