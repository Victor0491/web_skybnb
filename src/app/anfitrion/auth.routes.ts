import { Routes } from "@angular/router";
import { AnfitrionComponent } from "./anfitrion.component";
import { Paso1Component } from "./paso1/paso1.component";
import { DescripcionComponent } from "./paso1/descripcion/descripcion.component";
import { UbicacionComponent } from "./paso2/ubicacion/ubicacion.component";
import { DatosbasicosComponent } from "./paso2/datosbasicos/datosbasicos.component";
import { EntornoComponent } from "./paso1/entorno/entorno.component";
import { ActividadComponent } from "./paso1/actividad/actividad.component";
import { Paso2Component } from "./paso2/paso2.component";


export const AUTH_ROUTES: Routes = [

    { path: 'subetuespacio', component: AnfitrionComponent },
    { path: 'paso1', component: Paso1Component },
    // { path: 'modal', component: ModalComponent },
    { path: 'descripcion', component: DescripcionComponent },
    { path: 'ubicacion', component: UbicacionComponent },
    { path: 'datosbasicos', component: DatosbasicosComponent },
    { path: 'entorno', component: EntornoComponent },
    { path: 'actividad', component: ActividadComponent},
    { path: 'paso2', component: Paso2Component },
        // Puedes agregar más rutas aquí si es necesario
];
