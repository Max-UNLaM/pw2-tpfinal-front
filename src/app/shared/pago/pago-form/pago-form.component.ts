import {Component, Input, OnInit} from '@angular/core';
import {Factura} from '../../../providers/consorcio/factura/factura.model';
import {User} from '../../../providers/consorcio/usuario/usuario.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PagoError} from '../../../providers/consorcio/pago/pago.model';
import {PagoService} from '../../../providers/consorcio/pago/pago.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {MessageModalComponent} from '../../ui/message-modal/message-modal.component';
import {Router} from '@angular/router';

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
    afterPagarAction: () => void;

    constructor(private _router: Router,
                private _formBuilder: FormBuilder,
                private _pagoService: PagoService,
                protected snackBar: MatSnackBar,
                public dialog: MatDialog) {
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

    afterPagar(titulo: string, mensaje: string): void {
        const mensajeModal = this.dialog.open(MessageModalComponent, {
            width: '500px',
            data: {
                title: titulo,
                message: mensaje,
                buttons: [
                    {
                        title: 'ACEPTAR',
                        action: this.afterPagarAction
                    }
                ]
            }
        });
        mensajeModal.afterClosed().subscribe(() => {
            this._router.navigate(['/user/pago']).then(
                navegacion => {
                    console.log(navegacion);
                }, error => {
                    console.error(error);
                }
            );
        });
    }

    pagar() {
        const medioPago = this.medioPagoForm.getRawValue();
        const factura = this.factura;
        this._pagoService.create({
            id: factura.id,
            monto: medioPago.monto,
            banco: medioPago.banco,
            codigo_comprobante: medioPago.comprobante,
            medio_de_pago: this.medioDePago
        }).subscribe(
            ok => {
                console.log(ok);
                this.afterPagar('Éxito!', ok.body.mensaje);
            }, error => {
                console.error(error);
                this.snackBar.open(`Error al enviar su pago: ${error.error}`, 'OK', {duration: 5000});
            }
        );
    }

}
