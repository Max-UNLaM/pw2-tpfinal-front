import {Component, Input, OnInit} from '@angular/core';
import {Factura} from '../../../providers/consorcio/factura/factura.model';
import {User} from '../../../providers/consorcio/usuario/usuario.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PagoError} from '../../../providers/consorcio/pago/pago.model';
import {PagoService} from '../../../providers/consorcio/pago/pago.service';
import {MatSnackBar} from '@angular/material';

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

    constructor(private _formBuilder: FormBuilder, private _pagoService: PagoService, protected snackBar: MatSnackBar) {
    }

    ngOnInit() {
        console.log(this.factura);
        this.usuarioForm = this._formBuilder.group({
                nya: [this.user.name, Validators.required],
                email: [this.user.email, [Validators.email, Validators.required]],
                dni: [this.user.dni, Validators.required],
                medio: ['', Validators.required]
            }
        );
    }

    selectMedioDePago() {
        if (this.medioDePago === 'transferencia') {
            this.createTransferenciaForm().then(
                () => {
                    this.enableTransferencia = true;
                    console.log();
                },
                err => console.log('Error loco', err)
            );
        }
    }


    createTransferenciaForm() {
        return new Promise((resolve) => {
            console.log('1');
            this.medioPagoForm = this._formBuilder.group({
                banco: ['', Validators.required],
                comprobante: ['', [Validators.required, Validators.minLength(4)]],
                monto: [this.factura.adeuda, Validators.required]
            });
            console.log('2');
            resolve();
        });
    }

    pagar() {
        const medioPago = this.medioPagoForm.getRawValue();
        const factura = this.factura;
        this._pagoService.create({
            factura_id: factura.id,
            monto: medioPago.monto,
            codigo_comprobante: medioPago.comprobante,
            medio_de_pago: this.medioDePago
        }).subscribe(
            ok => {
                console.log(ok);
                this.snackBar.open(`Adeuda: ${ok.body.factura.adeuda}`, 'OK', {duration: 3000});
            }, error => {
                console.error(error);
                this.snackBar.open(`Error al enviar su pago: ${error.error}`, 'OK', {duration: 5000});
            }
        );
    }

}
