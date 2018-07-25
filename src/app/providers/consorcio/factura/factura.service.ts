import {Injectable} from '@angular/core';
import {ConsorcioFacturaRutasAdmin, ConsorcioFacturaRutasUser} from '../consorcio.routes';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {FacturaPaginatorResponse, FacturaResponse} from './factura.interface';

@Injectable({
    providedIn: 'root'
})
export class FacturaService {

    constructor(private _httpClient: HttpClient) {
    }

    public pageList(userToken: string, pageNumber, size = 10, admin?: boolean): Observable<HttpResponse<FacturaPaginatorResponse>> {
        const root = admin ? ConsorcioFacturaRutasAdmin.page : ConsorcioFacturaRutasUser.page;
        return this._httpClient.get<FacturaPaginatorResponse>(
            `${root}${pageNumber}&size=${size}`,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                })
            }
        );
    }

    public list(userToken: string): Observable<HttpResponse<FacturaResponse[]>> {
        return this._httpClient.get<FacturaResponse[]>(
            `${ConsorcioFacturaRutasUser.list}`,
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
