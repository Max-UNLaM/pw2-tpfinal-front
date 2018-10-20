import {Injectable} from '@angular/core';
import {ConsorcioFacturaRutasAdmin, ConsorcioFacturaRutasUser} from '../consorcio.routes';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Factura, FacturaPaginatorResponse} from './factura.model';

@Injectable({
    providedIn: 'root'
})
export class FacturaService {

    userToken;

    constructor(private _httpClient: HttpClient) {
        this.userToken = window.localStorage.getItem('userToken');
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

    public list(userToken: string): Observable<HttpResponse<Factura[]>> {
        return this._httpClient.get<Factura[]>(
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

    public read(userToken: string, id: number): Observable<HttpResponse<Factura>> {
        return this._httpClient.get<Factura>(
            `${ConsorcioFacturaRutasUser.read}${id}`,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                })
            }
        );
    }

    public create(factura: any): Observable<HttpResponse<any>> {
        return this._httpClient.post<any>(
            ConsorcioFacturaRutasAdmin.masa,
            factura,
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
