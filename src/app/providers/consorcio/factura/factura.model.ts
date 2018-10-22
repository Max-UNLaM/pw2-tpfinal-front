import {PaginatorResponse} from '../api.model';
import {Expensa, ExpensaConcepto} from '../expensa/expensa.model';
import {Gasto, GastoResponse} from '../gasto/gasto.model';
import {Consorcio} from '../consorcio/consorcio.interface';
import {User} from '../usuario/usuario.model';
import {GeneracionMasiva} from '../generacion-masiva/generacion-masiva';

export class Factura {
    id: number;
    mes: string;
    anio: string;
    emision: string;
    vencimiento: string;
    adeuda: number;
    total: number;
    pago_parcial: number;
    pago: string;
    usuario: User;
    consorcio: Consorcio;
    unidad: {
        id: number;
        nombre: string;
        usuario_id: number;
        consorcio_id: number;
    };
    expensa: Expensa;
    gastos_del_periodo: Gasto[];
}

export class FacturaResponse extends Factura {
    created_at: string;
    updated_at: string;
}

export interface FacturaPaginatorResponse extends PaginatorResponse {
    data: FacturaResponse[];
}

export class Facturar implements GeneracionMasiva {
    endpoint: string;
    periodo: {
        consorcio_id: number;
        mes: number;
        anio: number;
    };

    constructor() {
        this.endpoint = 'factura';
    }
}
