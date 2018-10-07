import {PaginatorResponse} from '../api.model';

export interface GastoResponse {
    id: number;
    nombre: string;
    valor: number;
    mes: number;
    anio: number;
    fecha: string;
    proveedor_id: number;
    consorcio_id: number;
    created_at: string;
    updated_at: string;
}

export interface GastoPaginatorResponse extends PaginatorResponse {
    data: GastoResponse[];
}

