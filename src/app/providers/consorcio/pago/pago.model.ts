export class Pago {
    propietario_id: number;
    usuario_que_genera_el_pago_id: number;
    factura_id: number;
    monto: number;
    fecha: string;
    estado: string;
    codigo_comprobante?: null;
    medio_de_pago: string;
    id: number;
}
export class PagoError {
    factura: string;
    monto: string;
    medioDePago: string;
}
