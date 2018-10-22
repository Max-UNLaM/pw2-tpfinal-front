import {Component, Input, OnInit} from '@angular/core';
import {Factura} from '../../../providers/consorcio/factura/factura.model';
import {Consorcio} from '../../../providers/consorcio/consorcio/consorcio.interface';
import {Gasto} from '../../../providers/consorcio/gasto/gasto.model';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
    selector: 'app-factura-completa',
    templateUrl: './factura-completa.component.html',
    styleUrls: ['./factura-completa.component.scss']
})
export class FacturaCompletaComponent implements OnInit {

    @Input() factura: Factura;
    @Input() pagar = false;
    consorcio: Consorcio;
    gastos: Gasto[];
    columnas = ['nombre', 'valor', 'mes', 'anio'];

    constructor(private _location: Location, private _router: Router) {
    }

    back() {
        this._location.back();
    }

    pay() {
        this._router.navigate([`/user/pago/emitir/${this.factura.id}`]);
    }


    ngOnInit() {
        this.consorcio = this.factura.consorcio as Consorcio;
        this.gastos = this.factura.gastos_del_periodo as Gasto[];
    }

}
