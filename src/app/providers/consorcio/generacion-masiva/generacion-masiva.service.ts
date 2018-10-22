import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {GeneracionMasivaRoutes} from '../consorcio.routes';
import {GeneracionMasiva} from './generacion-masiva';

@Injectable({
    providedIn: 'root'
})
export class GeneracionMasivaService {

    constructor(private _httpClient: HttpClient) {
    }

    public create(generacion: GeneracionMasiva): Observable<HttpResponse<any>> {
        console.log(generacion.periodo);
        const userToken = window.localStorage.getItem('userToken');
        const url = GeneracionMasivaRoutes[generacion.endpoint];
        return this._httpClient.post<any>(
            url,
            generacion.periodo,
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
