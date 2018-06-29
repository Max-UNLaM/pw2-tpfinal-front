import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {ConsorcioUnidadRutas} from '../consorcio.routes';
import {Observable} from 'rxjs';
import {UnidadResponse} from './unidad.interface';

@Injectable({
    providedIn: 'root'
})
export class UnidadService {

    constructor(private _httpClient: HttpClient) {
    }

    public list(): Observable<HttpRequest<UnidadResponse[]>> {
        console.log(ConsorcioUnidadRutas.list);
        return this._httpClient.get<HttpRequest<UnidadResponse[]>>(
            ConsorcioUnidadRutas.list,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }
        );
    }

}
