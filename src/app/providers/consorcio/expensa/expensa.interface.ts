import {PaginatorResponse} from '../paginator.interface';


export interface ExpensaCreate {
    unidad_id: number;
    año: number;
    mes: number;
    estado: string;
    vencimiento: string;
    emision: string;
    importe: number;
}

export interface ExpensaResponse extends ExpensaCreate {
    id: number;
    created_at: string;
    updated_at: string;
}

export interface ExpensaPaginatorResponse extends PaginatorResponse {
    data: ExpensaResponse[];
}
