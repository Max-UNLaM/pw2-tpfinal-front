import {PaginatorResponse} from '../paginator.interface';


export interface ExpensaCreate {
    nombre: string;
    direccion: string;
    localidad: string;
    provincia: string;
    consorcio_id: number;
}

export interface ExpensaResponse extends ExpensaCreate {
    id: number;
    created_at: string;
    updated_at: string;
}

export interface ExpensaPaginatorResponse extends PaginatorResponse {
    data: ExpensaResponse[];
}
