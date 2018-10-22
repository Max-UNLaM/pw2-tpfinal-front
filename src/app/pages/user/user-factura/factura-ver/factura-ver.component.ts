import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Factura} from '../../../../providers/consorcio/factura/factura.model';

@Component({
    selector: 'app-factura-ver',
    templateUrl: './factura-ver.component.html',
    styleUrls: ['./factura-ver.component.scss']
})
export class FacturaVerComponent implements OnInit {

    factura: Factura;

    constructor(private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this._route.data
            .subscribe((data: { factura: Factura }) => {
                console.log(data);
                this.factura = data.factura as Factura;
            });
    }

}
