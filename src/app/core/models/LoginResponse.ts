
import { User } from "./User";

export interface LoginResponse {
    accessToken: string; // Si también estás manejando tokens de actualización
    user?: User; // Incluye cualquier otra información que necesites
  }