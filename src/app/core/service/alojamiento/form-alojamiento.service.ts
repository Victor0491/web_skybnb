import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormAlojamientoService {
  private formDataKey = 'formAlojamientoData';

  private formData: any = this.loadFormData() || {
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

  setFormData(data: any): void {
    this.formData = { ...this.formData, ...data };
    this.saveFormData();
  }

  getFormData(): any {
    return this.formData;
  }

  clearFormData(): void {
    this.formData = {
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
    this.saveFormData();
  }

  private saveFormData(): void {
    localStorage.setItem(this.formDataKey, JSON.stringify(this.formData));
  }

  private loadFormData(): any {
    const data = localStorage.getItem(this.formDataKey);
    return data ? JSON.parse(data) : null;
  }
}

