export interface UserMatch {
    uid?: string;
    name: string;
    i_want: any;
    distance: number;
    latitude?: number,
    longitude?: number,
    pic?: string
}

export interface KromosMatch {
    id_kromo: number;
    lo_tienen: string[];
    lo_quieren: string[];
}