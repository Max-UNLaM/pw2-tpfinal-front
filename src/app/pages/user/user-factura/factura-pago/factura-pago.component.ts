import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Factura} from '../../../../providers/consorcio/factura/factura.model';

@Component({
    selector: 'app-factura-pago',
    templateUrl: './factura-pago.component.html',
    styleUrls: ['./factura-pago.component.scss']
})
export class FacturaPagoComponent implements OnInit {

    factura: Factura;

    constructor(private _route: ActivatedRoute) {
    }

    // Recibe el objeto buscado en el servicio "resolver"
    ngOnInit() {
        this._route.data
            .subscribe((data: { factura: Factura }) => {
                this.factura = data.factura as Factura;
            });
    }

}
