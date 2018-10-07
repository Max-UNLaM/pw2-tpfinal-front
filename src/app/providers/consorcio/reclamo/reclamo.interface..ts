import {PaginatorResponse} from '../api.model';

export interface ReclamoCreate {
    unidad_id: number;
    motivo: string;
    fecha_reclamo: string;
}


export interface ReclamoCreateResponse extends ReclamoCreate {
    updated_at: string;
    created_at: string;
}

export interface ReclamoResponse extends ReclamoCreate {
    id: number;
    fecha_resolucion: string;
    conforme: string;
    created_at: string;
    updated_at: string;
}

export interface ReclamoPaginatorResponse extends PaginatorResponse {
    data: ReclamoResponse[];
}
