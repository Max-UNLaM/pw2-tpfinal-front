import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {UserCreate, UserCreateResponse} from './usuario.interface';
import {Observable} from 'rxjs';
import {ConsorcioUsuarioRutas} from '../consorcio.routes';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    constructor(private _httpClient: HttpClient) {
    }

    public create(usuario: UserCreate): Observable<HttpResponse<UserCreateResponse>> {
        return this._httpClient.post<HttpResponse<UserCreateResponse>>(
            ConsorcioUsuarioRutas.create,
            usuario,
            {
                observe: 'body',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }
        );
    }
}
