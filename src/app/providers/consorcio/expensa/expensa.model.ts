import {PaginatorResponse} from '../api.model';

export class Expensa {
    id: number;
    anio: string;
    mes: string;
    pago: string;
    emision: string;
    vencimiento: string;
    importe: number;
}

export class ExpensaCreate extends Expensa {
    unidad_id: number;
    consorcio_nombre: string;
    unidad_nombre: string;
    estado: string;
}

export class ExpensaResponse extends ExpensaCreate {
    id: number;
    created_at: string;
    updated_at: string;
    pago: string;
}

export class ExpensaPaginatorResponse extends PaginatorResponse {
    data: ExpensaResponse[];
}

export class ExpensaConcepto {
    unidad: string;
    concepto: string;
    valor_total: number;
    participacion: string;
    valor: number;
}
