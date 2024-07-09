
export interface User{
    email : string;
    password : string;
    roles: number[]
}

export interface UserProfile{

    nombreCompleto: string,
    fecha_nacimiento: null,
    usuario: null,
    telefono: string,
    actividades: [],
    ubicacion: [],
    tipoalojamiento: []
    
}

export interface PartialUserProfile {
    nombreCompleto: string;
    fecha_nacimiento: null;
    usuario: number | null;
    telefono: string;
  }

  export interface RegisterResponse {
    message: string;
    id_user: number;  // Asegúrate de que esto coincida con el nombre de la propiedad devuelta por el backend
  }