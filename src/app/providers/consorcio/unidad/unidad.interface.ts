import {PaginatorResponse} from '../paginator.interface';


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
}

export interface UnidadPaginatorResponse extends PaginatorResponse {
    data: UnidadResponse[];
}
