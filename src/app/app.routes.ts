import { Routes } from '@angular/router';
import { HomeAlojamientosComponent } from './home/home-alojamientos/home-alojamientos.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [

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
