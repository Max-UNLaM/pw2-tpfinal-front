import {ApiResponse, PaginatorResponse} from '../api.model';
import {Consorcio} from '../consorcio/consorcio.interface';
import {Proveedor} from '../proveedor/proveedor.model';

export class Gasto {
    id: number;
    nombre: string;
    valor: number;
    mes: number;
    anio: number;
    fecha: string;
    es_gasto_fijo: boolean;
    proveedor_id: number;
    consorcio_id: number;
}

export class GastoResponse extends Gasto implements ApiResponse {
    consorcio: Consorcio;
    proveedor: Proveedor;
    proveedor_id: number;
    consorcio_id: number;
    created_at: string;
    updated_at: string;
}

export class GastoPaginatorResponse extends PaginatorResponse implements ApiResponse {
    data: GastoResponse[];
    created_at: string;
    updated_at: string;
}
