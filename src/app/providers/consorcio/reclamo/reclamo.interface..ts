import {PaginatorResponse} from '../api.model';
import {Unidad} from '../unidad/unidad.model';
import {User} from '../usuario/usuario.model';

export interface ReclamoCreate {
    unidad_id: number;
    motivo: string;
    fecha_reclamo: string;
}


export interface ReclamoCreateResponse extends ReclamoCreate {
    updated_at: string;
    created_at: string;
}

export interface ReclamoResponse extends ReclamoCreate {
    id: number;
    fecha_resolucion: string;
    conforme: string;
    created_at: string;
    updated_at: string;
}

export interface ReclamoEstado {
    id: number;
    detalle: string;
}

export interface Reclamo {
    id: 23;
    comentario_admin?: string;
    comentario_user?: string;
    estado_de_reclamo: ReclamoEstado;
    fecha: string;
    motivo: 'Música fuerte en horas nocturnas';
    unidad: Unidad;
    usuario: User;
}

export interface ReclamoPaginatorResponse extends PaginatorResponse {
    data: ReclamoResponse[];
}
