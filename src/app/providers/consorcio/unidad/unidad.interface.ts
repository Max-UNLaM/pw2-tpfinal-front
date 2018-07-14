import {PaginatorResponse} from '../paginator.interface';

export interface UnidadResponse extends Unidad {
    id: number;
    created_at: string;
    updated_at: string;
}

export interface UnidadPaginatorResponse extends PaginatorResponse {
    data: UnidadResponse[];
}

export interface Unidad {
    nombre: string;
    direccion: string;
    localidad: string;
    provincia: string;
    consorcio_id: number;
}
