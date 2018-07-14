import {PaginatorResponse} from '../paginator.interface';

export interface ConsorcioCreate {
    nombre: string;
    direccion: string;
    localidad: string;
    provincia: string;
    telefono: string;
}

export interface ConsorcioResponse extends ConsorcioCreate {
    id: number;
    created_at: string;
    updated_at: string;
}

export interface ConsorcioPaginatorResponse extends PaginatorResponse {
    data: ConsorcioResponse[];
}
