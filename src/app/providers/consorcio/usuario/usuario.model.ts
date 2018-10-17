export class UserNew {
    name: string;
    email: string;
    updated_at: string;
    created_at: string;
    id: number;
}

export class UserCreate {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export class UserCreateResponse {
    user: UserNew;
}

export class UserCreateError {
    name?: string[];
    mail?: string[];
    password?: string[];
}

export class User {
    id: number;
    nombre: string;
    rol_id: number;
    administra_consorcio?: any;
    dni: number;
    estado: string;
}
