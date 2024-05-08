import { Routes } from "@angular/router";
import { AlojamientoDetailComponent } from "./alojamiento-detail/alojamiento-detail.component";


export const AUTH_ROUTES: Routes = [
    { path: ':id', component:  AlojamientoDetailComponent}
];