import {Injectable} from '@angular/core';
import {FacturaService} from '../../../../providers/consorcio/factura/factura.service';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FacturaPagoResolverService implements Resolve<any> {

    constructor(private facturaService: FacturaService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const id = route.paramMap.get('id');
        return this.facturaService.list(id).pipe(
            take(1),
            map(factura => {
                if (factura) {
                    return factura;
                } else {
                    this.router.navigate(['/user']);
                }
            })
        );
    }
}
