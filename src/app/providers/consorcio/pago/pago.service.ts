import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {ConsorcioPagoRutasAdmin, ConsorcioPagoRutasUser} from '../consorcio.routes';
import {Pago, PagoListResponse} from './pago.model';
import {ListPaginate} from '../../../shared/model/lists.model';

@Injectable({
    providedIn: 'root'
})
export class PagoService {

    userToken;

    constructor(private _httpClient: HttpClient) {
        this.userToken = window.localStorage.getItem('userToken');
    }

    public create(pago: Pago): Observable<HttpResponse<any>> {
        return this._httpClient.post<any>(
            ConsorcioPagoRutasUser.create,
            pago,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.userToken}`
                })
            }
        );
    }

    public list(isAdmin: boolean, paginate?: ListPaginate): Observable<HttpResponse<PagoListResponse>> {
        const rutas = isAdmin ? ConsorcioPagoRutasAdmin : ConsorcioPagoRutasUser;
        const tipo = paginate == null ? 'list' : 'page';
        let url = rutas[tipo];
        if (paginate != null) {
            url = `${url}${paginate.pageNumber}?size=${paginate.pageSize}`;
        }
        return this._httpClient.get<PagoListResponse>(
            url,
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
