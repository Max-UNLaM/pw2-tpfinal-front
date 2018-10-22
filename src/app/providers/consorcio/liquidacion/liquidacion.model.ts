import {Consorcio} from '../consorcio/consorcio.interface';
import {Gasto} from '../gasto/gasto.model';
import {PaginateMeta} from '../api.model';
import {GeneracionMasiva} from '../generacion-masiva/generacion-masiva';

export interface Liquidacion {
    id: number;
    mes: number;
    anio: number;
    valor_sin_coeficiente: number;
    valor: number;
    consorcio: Consorcio;
    gastos_del_periodo: Gasto[];
}

export interface LiquidacionPage extends PaginateMeta {
    data: Liquidacion[];
}

export class Liquidar implements GeneracionMasiva {
    endpoint: 'liquidacion';
    periodo: {
        consorcio_id: number;
        mes: number;
        anio: number;
    };
}
