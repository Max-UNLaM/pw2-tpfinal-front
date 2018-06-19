export interface UserNew {
    name: string;
    email: string;
    updated_at: string;
    created_at: string;
    id: number;
}

export interface UserCreate {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface UserCreateResponse {
    user: UserNew;
}

export interface UserCreateError {
    name?: string[];
    mail?: string[];
    password?: string[];
}
