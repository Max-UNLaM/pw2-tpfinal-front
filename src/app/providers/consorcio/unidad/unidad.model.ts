import {PaginatorResponse} from '../api.model';

export class Unidad {

}


export interface UnidadCreate {
    nombre: string;
    direccion: string;
    localidad: string;
    provincia: string;
    consorcio_id: number;
}

export interface UnidadResponse extends UnidadCreate {
    nombre: string;
    direccion: string;
    localidad: string;
    provincia: string;
    consorcio_id: number;
    id: number;
    created_at: string;
    updated_at: string;
    consorcio_nombre: string;
    usuario_nombre: string;
}

export interface UnidadPaginatorResponse extends PaginatorResponse {
    data: UnidadResponse[];
}
