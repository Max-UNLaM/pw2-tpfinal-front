// 1 resuelto 2 no-resuelto 3 rechazado

// id estado_de_reclamo_id comentario_admin (comentario)

// estado_de_reclamo_id

export abstract class EstadoReclamoList {
    id: number;
    texto: string;
}

export interface ReclamoUpdate {
    id: number;
    estado_de_reclamo_id: number;
    comentario_admin: string;
}

export class EstadoResuelto extends EstadoReclamoList {
    id: number;
    texto: string;
    constructor() {
        super();
        this.id = 1;
        this.texto = 'RESUELTO';
    }
}

export class EstadoNoResuelto extends EstadoReclamoList {
    constructor() {
        super();
        this.id = 2;
        this.texto = 'NO RESUELTO';
    }
}

export class EstadoRechazado extends EstadoReclamoList {
    constructor() {
        super();
        this.id = 3;
        this.texto = 'RECHAZADO';
    }
}
