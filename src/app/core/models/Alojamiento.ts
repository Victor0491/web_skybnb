  export interface Alojamiento {
    nombre: string;
    direccion: string;
    imagenes : string[];
    dormitorios: number;
    banos: number;
    huespedes: number;
    mascotas: boolean;
    usuario: number;
    precio: number;
    estado_destacado: boolean;
    tipoalojamiento: number; 
    ubicacion: number;
    actividades: number[];
    servicios: number[];
  }
