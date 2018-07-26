import {PaginatorResponse} from '../paginator.interface';


export interface ExpensaCreate {
    unidad_id: number;
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

export interface ExpensaConceptoResponse {
    unidad: string;
    concepto: string;
    valor_total: number;
    participacion: string;
    valor: number;
}
