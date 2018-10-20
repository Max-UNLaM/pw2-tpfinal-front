export class PaginatorResponse {
    current_page: number;
    data: object | object[];
    fist_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url?: null;
    path: string;
    per_page: string;
    prev_page_url: string;
    to: number;
    total: number;
}

export interface ApiResponse {
    created_at: string;
    updated_at: string;
}
