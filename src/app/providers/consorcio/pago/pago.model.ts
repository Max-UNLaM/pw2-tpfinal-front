import {User} from '../usuario/usuario.model';
import {Factura} from '../factura/factura.model';
import {Gasto} from '../gasto/gasto.model';
import {PaginatorResponse} from '../api.model';

export class Pago {
    factura_id: number;
    id?: number;
    monto: number;
    banco: string;
    codigo_comprobante: string;
    medio_de_pago: string;
    fecha?: string;
    estado?: string;
    propietario?: User;
    usuario_que_genera_el_pago?: User;
    factura?: Factura;
    gastos_del_periodo?: Gasto[];
}

export class PagoError {
    factura: string;
    monto: string;
    medioDePago: string;
}

export class PagoListResponse extends PaginatorResponse {
    data: Pago[];
}
