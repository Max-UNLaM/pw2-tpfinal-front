import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {ConsorcioGastoProveedorAdmin, ConsorcioReclamoRutasUser} from '../consorcio.routes';
import {ReclamoCreateResponse} from '../reclamo/reclamo.interface.';

@Injectable({
    providedIn: 'root'
})
export class ProveedorService {

    constructor(private _httpClient: HttpClient) {
    }

    public list(): Observable<HttpResponse<any[]>> {
        const userToken = window.localStorage.getItem('userToken');
        return this._httpClient.get<any[]>(
            `${ConsorcioGastoProveedorAdmin.list}`,
            {
                observe: 'response',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                })
            }
        );
    }


    public create(reclamo: any): Observable<HttpResponse<ReclamoCreateResponse>> {
        const userToken = window.localStorage.getItem('userToken');
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
}
