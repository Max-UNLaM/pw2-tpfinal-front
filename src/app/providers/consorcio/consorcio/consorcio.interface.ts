import {PaginatorResponse} from '../api.model';

export interface ConsorcioCreate {
    nombre: string;
    direccion: string;
    localidad: string;
    provincia: string;
    telefono: string;
}

export interface ConsorcioResponse extends Consorcio {
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
    provincia: string;
    telefono: number;
    email: string;
    codigo_postal: number;
    cuit: string;
    cantidad_de_pisos: number;
    departamentos_por_piso: number;
}

export class Consorcio {
    id: number;
    nombre: string;
    direccion: string;
    localidad: string;
    provincia: string;
    telefono: number;
    email: string;
    codigo_postal: number;
    cuit: string;
    cantidad_de_pisos: number;
    departamentos_por_piso: number;
}

export interface ConsorcioUserPaginatorResponse extends PaginatorResponse {
    data: ConsorcioUserResponse[];
}
