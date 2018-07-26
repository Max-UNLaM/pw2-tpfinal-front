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

export interface ConsorcioUserResponse {
    id: number;
    nombre: string;
    direccion: string;
    localidad: string;
}

export interface ConsorcioUserPaginatorResponse extends PaginatorResponse {
    data: ConsorcioUserResponse[];
}
