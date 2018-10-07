import {PaginatorResponse} from '../api.model';


export interface ExpensaCreate {
    unidad_id: number;
    consorcio_nombre: string;
    unidad_nombre: string;
    anio: number;
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
    pago: string;
}

export interface ExpensaPaginatorResponse extends PaginatorResponse {
    data: ExpensaResponse[];
}

export interface ExpensaConcepto {
    unidad: string;
    concepto: string;
    valor_total: number;
    participacion: string;
    valor: number;
}
