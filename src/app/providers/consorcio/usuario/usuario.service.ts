import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {User, UserCreate, UserCreateResponse} from './usuario.model';
import {Observable} from 'rxjs';
import {ConsorcioConsorcioRutasUser, ConsorcioUsuarioRutas} from '../consorcio.routes';

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

    public read(): Observable<HttpResponse<User>> {
        const userToken = window.localStorage.getItem('userToken');
        return this._httpClient.get<User>(
            ConsorcioConsorcioRutasUser.read,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                })
            }
        );
    }
}
