import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {User, UserCreate, UserCreateResponse} from './usuario.model';
import {Observable} from 'rxjs';
import {ConsorcioConsorcioRutasUser, ConsorcioUsuarioRutas} from '../consorcio.routes';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private readonly userToken: string;

    constructor(private _httpClient: HttpClient) {
        this.userToken = window.localStorage.getItem('userToken');
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
        return this._httpClient.get<User>(
            ConsorcioConsorcioRutasUser.read,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.userToken}`
                })
            }
        );
    }
}
