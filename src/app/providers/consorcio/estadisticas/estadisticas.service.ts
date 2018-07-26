import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {LoginStorageService} from '../../local/login/login-storage.service';
import {Observable} from 'rxjs';
import {ConsorcioConsorcioStatsRutasAdmin, ConsorcioConsorcioStatsRutasUser} from '../consorcio.routes';
import {ConsorcioStatsResponse} from './estadisticas.interface';

@Injectable({
    providedIn: 'root'
})
export class EstadisticasService {

    private userToken: string;

    constructor(private _httpClient: HttpClient, protected loginStorage: LoginStorageService) {
        this.userToken = this.loginStorage.getToken();
    }

    public list(isAdmin?: boolean): Observable<HttpResponse<ConsorcioStatsResponse[]>> {
        const root = isAdmin ? ConsorcioConsorcioStatsRutasAdmin.list : ConsorcioConsorcioStatsRutasUser.list;
        return this._httpClient.get<ConsorcioStatsResponse[]>(
            root,
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
