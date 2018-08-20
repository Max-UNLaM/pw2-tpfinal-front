export interface ConsorcioStatsResponse {
    'consorcio_id': number;
    'consorcio_nombre': string;
    'cantidad_de_unidades': number;
    'cantidad_de_facturas': number;
    'facturas_pagas': number;
    'facturas_con_pago_parcial': number;
    'facturas_impagas': number;
    'total_reclamos': number;
    'reclamos_resueltos': number;
    'reclamos_no_resueltos': number;
    'reclamos_rechazados': number;
    'reclamos_esperando_respuesta': number;
}
