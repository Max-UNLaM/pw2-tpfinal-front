export interface GeneracionMasiva {
    endpoint: string;
    periodo: Periodo;
}

export interface Periodo {
    consorcio_id: number;
    mes: number;
    anio: number;
}
