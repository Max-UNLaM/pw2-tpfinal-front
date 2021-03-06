import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConsorcioGastoProveedorAdmin, ConsorcioMinutaUser} from '../consorcio.routes';

@Injectable({
  providedIn: 'root'
})
export class MinutaService {

    constructor(private _httpClient: HttpClient) {
    }

    public list(): Observable<HttpResponse<any[]>> {
        const userToken = window.localStorage.getItem('userToken');
        return this._httpClient.get<any[]>(
            `${ConsorcioMinutaUser.list}`,
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
