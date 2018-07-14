import {PaginatorResponse} from '../paginator.interface';

export interface UnidadResponse {
    id: number;
    nombre: string;
    direccion: string;
    localidad: string;
    provincia: string;
    telefono: string;
    created_at: string;
    updated_at: string;
}

export interface UnidadPaginatorResponse extends PaginatorResponse   {
    data: UnidadResponse[];
}
