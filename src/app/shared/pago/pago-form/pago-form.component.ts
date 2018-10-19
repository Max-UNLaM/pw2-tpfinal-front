import {Component, Input, OnInit} from '@angular/core';
import {Factura} from '../../../providers/consorcio/factura/factura.model';
import {User} from '../../../providers/consorcio/usuario/usuario.model';

@Component({
    selector: 'app-pago-form',
    templateUrl: './pago-form.component.html',
    styleUrls: ['./pago-form.component.scss']
})
export class PagoFormComponent implements OnInit {

    @Input() factura: Factura;
    @Input() user: User;

    constructor() {
    }

    ngOnInit() {
    }

}
