import {Component, Input, OnInit} from '@angular/core';
import {Factura} from '../../../providers/consorcio/factura/factura.model';
import {Consorcio} from '../../../providers/consorcio/consorcio/consorcio.interface';
import {Gasto} from '../../../providers/consorcio/gasto/gasto.model';
import {Location} from '@angular/common';

@Component({
    selector: 'app-factura-completa',
    templateUrl: './factura-completa.component.html',
    styleUrls: ['./factura-completa.component.scss']
})
export class FacturaCompletaComponent implements OnInit {

    @Input() factura: Factura;
    consorcio: Consorcio;
    gastos: Gasto[];
    columnas = ['nombre', 'valor', 'mes', 'anio'];

    constructor(private _location: Location) {
    }

    back() {
        this._location.back();
    }


    ngOnInit() {
        this.consorcio = this.factura.consorcio as Consorcio;
        this.gastos = this.factura.gastos_del_periodo as Gasto[];
    }

}
