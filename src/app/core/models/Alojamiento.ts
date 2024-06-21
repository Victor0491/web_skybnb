<<<<<<< HEAD
export interface Alojamiento {
  nombre: string;
  direccion: string;
  imagenes: string[];
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
=======
  import { TipoAlojamiento } from "./TipoAlojamiento";
  import { TipoUbicacion } from "./TipoUbicacion";
  import { UserProfile } from "./User";
  import { TipoActividad } from "./TipoActividad";
  import { Servicio } from "./Servicios";


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
  
  export interface Imagenes {
    image1: string;
    image2?: string;
    image3?: string;
    image4?: string;
    image5?: string;
    image6?: string;
    image7?: string;
    image8?: string;
    image9?: string;
    image10?: string;
    image11?: string;
    image12?: string;
  }
  
  export interface ListAlojamiento {
    nombre: string;
    precio: number;
    estado_destacado: boolean;
    tipoalojamiento: TipoAlojamiento;
    imagenes: Imagenes;
  }


  export interface AlojamientoDetails {
    nombre: string;
    direccion: string;
    dormitorios: number;
    banos: number;
    huespedes: number;
    mascotas: boolean;
    usuario: UserProfile;
    precio: number;
    estado_destacado: boolean;
    tipoalojamiento: TipoAlojamiento;
    ubicacion: TipoUbicacion;
    actividades: TipoActividad[];
    servicios: Servicio[];
  }
>>>>>>> test
