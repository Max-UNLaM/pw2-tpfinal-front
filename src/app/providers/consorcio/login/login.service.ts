import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OauthLogin, OauthLoginResponse} from './login.interface';
import {ConsorcioLoginRutas} from '../consorcio.routes';
import {headersMain} from '../../headers.model';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private _httpClient: HttpClient) {
    }

    public login(input: OauthLogin): Observable<HttpRequest<OauthLoginResponse>> {
        return this._httpClient.post<HttpRequest<OauthLoginResponse>>(
            ConsorcioLoginRutas.login,
            input, {
                headers: headersMain.typeJson
            }
        );
    }
}
