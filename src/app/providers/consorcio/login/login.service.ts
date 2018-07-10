import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OauthLogin, OauthLoginResponse} from './login.interface';
import {ConsorcioLoginRutas} from '../consorcio.routes';
import {headersMain} from '../../headers.model';
import {catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private _httpClient: HttpClient) {
    }

    public login(input: OauthLogin): Observable<HttpResponse<OauthLoginResponse>> {
        return this._httpClient.post<OauthLoginResponse>(
            ConsorcioLoginRutas.login,
            input,
            {
                observe: 'response',
                headers: headersMain.typeJson
            },
        );
    }
}
