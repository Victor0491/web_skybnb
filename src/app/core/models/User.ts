
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