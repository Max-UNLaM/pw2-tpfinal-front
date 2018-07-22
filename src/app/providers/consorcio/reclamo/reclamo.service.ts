import {Injectable} from '@angular/core';
import {ReclamoCreate, ReclamoCreateResponse, ReclamoPaginatorResponse} from './reclamo.interface.';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {ConsorcioReclamoRutasUser, ConsorcioUnidadRutasAdmin} from '../consorcio.routes';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ReclamoService {

    constructor(private _httpClient: HttpClient) {

    }

    public create(reclamo: ReclamoCreate, userToken: string): Observable<HttpResponse<ReclamoCreateResponse>> {
        return this._httpClient.post<ReclamoCreateResponse>(
            ConsorcioReclamoRutasUser.create,
            reclamo,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                })
            }
        );
    }

    public page(userToken: string, pageNumber: number, pageSize: number): Observable<HttpResponse<ReclamoPaginatorResponse>> {
        console.log(`${ConsorcioReclamoRutasUser.page}${pageNumber}&size=${pageSize}`);
        return this._httpClient.get<ReclamoPaginatorResponse>(
            `${ConsorcioReclamoRutasUser.page}${pageNumber}&size=${pageSize}`,
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
