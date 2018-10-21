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

    constructor(private _httpClient: HttpClient) {
    }

    public create(pago: Pago): Observable<HttpResponse<any>> {
        const userToken = window.localStorage.getItem('userToken');
        return this._httpClient.post<any>(
            ConsorcioPagoRutasUser.create,
            pago,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                })
            }
        );
    }

// http://api.consorcioloco.local/api/admin/pago/aprobar
    public process(id: number, aprobar: boolean): Observable<HttpResponse<Pago>> {
        const userToken = window.localStorage.getItem('userToken');
        const url = aprobar ? ConsorcioPagoRutasAdmin.aprobar : ConsorcioPagoRutasAdmin.rechazar;
        return this._httpClient.put<Pago>(
            url,
            {id: id},
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                })
            }
        );
    }

    public filter(paginate: ListPaginate): Observable<HttpResponse<PagoListResponse>> {
        const userToken = window.localStorage.getItem('userToken');
        const url = `${ConsorcioPagoRutasAdmin.list}/filtro-por-estado?status=APROBACION_PENDIENTE
        &page=${paginate.pageNumber}&size=${paginate.pageSize}`;
        return this._httpClient.get<PagoListResponse>(
            url,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                })
            }
        );
    }

    public list(isAdmin: boolean, paginate?: ListPaginate): Observable<HttpResponse<PagoListResponse>> {
        const userToken = window.localStorage.getItem('userToken');
        const rutas = isAdmin ? ConsorcioPagoRutasAdmin : ConsorcioPagoRutasUser;
        const tipo = paginate == null ? 'list' : 'page';
        let url = rutas[tipo];
        console.log(url);
        if (paginate != null) {
            url = `${url}${paginate.pageNumber}&size=${paginate.pageSize}`;
        }
        console.log(url);
        return this._httpClient.get<PagoListResponse>(
            url,
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
