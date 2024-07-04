import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormAlojamientoService {

  private initialState: any = {
    nombre: "",
    direccion: "",
    imagenes: [],
    dormitorios: 0,
    banos: 0,
    huespedes: 0,
    mascotas: false,
    usuario: 0,
    precio: 0,
    estado_destacado: false,
    tipoalojamiento: 0,
    ubicacion: 0,
    actividades: [],
    servicios: []
  };

  private formState = new BehaviorSubject<any>({...this.initialState});

  getFormState() {
    return this.formState.asObservable();
  }

  updateFormState(data: any) {
    const currentState = this.formState.value;
    this.formState.next({ ...currentState, ...data });
  }

  resetFormState() {
    this.formState.next({ ...this.initialState });
  }
}

