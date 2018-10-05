import {ApiResponse, PaginatorResponse} from '../api.model';
import {ExpensaConcepto} from '../expensa/expensa.interface';
import {GastoResponse} from '../gasto/gasto.interface';

export class Factura extends ApiResponse {
    id: number;
    consorcio_id: number;
    usuario_id: number;
    mes: string;
    anio: string;
    emision: string;
    vencimiento: string;
    total: number;
    pago_parcial: number;
    adeuda: number;
    periodo: string;
    conceptos: ExpensaConcepto[];
    gastos_del_periodo: GastoResponse[];
}

export class FacturaResponse extends Factura {
    created_at: string;
    updated_at: string;
}

export interface FacturaPaginatorResponse extends PaginatorResponse {
    data: FacturaResponse[];
}
