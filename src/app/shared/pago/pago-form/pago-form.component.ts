import {Component, Input, OnInit} from '@angular/core';
import {Factura} from '../../../providers/consorcio/factura/factura.model';
import {User} from '../../../providers/consorcio/usuario/usuario.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PagoError} from '../../../providers/consorcio/pago/pago.model';

@Component({
    selector: 'app-pago-form',
    templateUrl: './pago-form.component.html',
    styleUrls: ['./pago-form.component.scss']
})
export class PagoFormComponent implements OnInit {

    @Input() factura: Factura;
    @Input() user: User;

    medioDePago: string;
    usuarioForm: FormGroup;
    medioPagoForm: FormGroup;
    error: PagoError;
    enableTransferencia = false;

    constructor(private _formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.usuarioForm = this._formBuilder.group({
                nya: [this.user.name, Validators.required],
                email: [this.user.email, [Validators.email, Validators.required]],
                dni: [this.user.dni, Validators.required],
                medio: ['', Validators.required]
            }
        );
    }

    selectMedioDePago() {
        console.log(this.medioDePago);
        if (this.medioDePago === 'transferencia') {
            this.createTransferenciaForm();
            this.enableTransferencia = true;
        }
    }

    createTransferenciaForm() {
        this.medioPagoForm = this._formBuilder.group({
            banco: ['', Validators.required],
            comprobante: ['', Validators.required]
        });
    }

    pagar() {
        console.log(this.usuarioForm.getRawValue());
        console.log(this.medioPagoForm.getRawValue());
        console.log(this.factura);
    }

}
