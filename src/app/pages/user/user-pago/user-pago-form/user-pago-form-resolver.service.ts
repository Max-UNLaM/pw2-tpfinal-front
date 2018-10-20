import {Injectable} from '@angular/core';
import {FacturaService} from '../../../../providers/consorcio/factura/factura.service';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserPagoFormResolverService implements Resolve<any> {

    constructor(private facturaService: FacturaService, private router: Router) {
    }

    // Busca el objeto Factura en la api, devuelve si está bien, redirige si hay problema de permisos
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const id = +route.paramMap.get('id');
        const token = window.localStorage.getItem('userToken');
        return this.facturaService.read(token, id).pipe(
            take(1),
            map(factura => {
                if (factura) {
                    return factura.body;
                } else {
                    this.router.navigate(['/user/pago'])
                        .catch(err => console.error(err));
                }
            })
        );
    }
}
