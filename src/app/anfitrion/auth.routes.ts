import { Routes } from "@angular/router";
import { AnfitrionComponent } from "./anfitrion.component";
import { Paso1Component } from "./paso1/paso1.component";
import { ModalComponent } from "../shared/components/modal/modal.component";
import { DescripcionComponent } from "./paso1/descripcion/descripcion.component";
import { UbicacionComponent } from "./paso1/ubicacion/ubicacion.component";
import { DatosbasicosComponent } from "./paso1/datosbasicos/datosbasicos.component";


export const AUTH_ROUTES: Routes = [

    { path: 'subetuespacio', component: AnfitrionComponent },
    { path: 'paso1', component: Paso1Component },
    // { path: 'modal', component: ModalComponent },
    { path: 'descripcion', component: DescripcionComponent },
    { path: 'ubicacion', component: UbicacionComponent },
    { path: 'datosbasicos', component: DatosbasicosComponent },
        // Puedes agregar más rutas aquí si es necesario
];
