import {PaginatorResponse} from '../paginator.interface';
import {ExpensaConceptoResponse} from '../expensa/expensa.interface';
import {GastoResponse} from '../gasto/gasto.interface';

export interface FacturaResponse {
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
    conceptos: ExpensaConceptoResponse[];
    gastos_del_periodo: GastoResponse[];
    created_at: string;
    updated_at: string;
}

export interface FacturaPaginatorResponse extends PaginatorResponse {
    data: FacturaResponse[];
}
