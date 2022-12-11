
export interface AuthResponse {
    ok: boolean;
    uid?: string;
    name?: string;
    email?: string;
    latitude?: number;
    longitude?: number;
    picture?: string;
    token?: string;
    msg?: string;
}

export interface Usuario {
    uid: string;
    name: string;
    email: string;
    latitude?: number;
    longitude?: number;
    picture?:string;
}