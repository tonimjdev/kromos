import { Usuario } from '../../../auth/interfaces/interfaces';

export interface KromosResponse {
    user: Usuario;
}


export interface Kromos {
    id: number;
    card: string;
    ud: number;
    category: string;
    country?: string;
    color?: string;

}