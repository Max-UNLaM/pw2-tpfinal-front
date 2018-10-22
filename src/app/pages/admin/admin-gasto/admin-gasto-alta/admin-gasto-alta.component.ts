import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ConsorcioService} from '../../../../providers/consorcio/consorcio/consorcio.service';
import {Consorcio, ConsorcioUserResponse} from '../../../../providers/consorcio/consorcio/consorcio.interface';
import {ProveedorService} from '../../../../providers/consorcio/proveedor/proveedor.service';
import {GastoService} from '../../../../providers/consorcio/gasto/gasto.service';

@Component({
    selector: 'app-admin-gasto-alta',
    templateUrl: './admin-gasto-alta.component.html',
    styleUrls: ['./admin-gasto-alta.component.scss']
})
export class AdminGastoAltaComponent implements OnInit {
    gastoForm: FormGroup;
    accessError;
    accessErrorText;
    consorcios: Consorcio[] = [];
    proveedores: any[];
    proveedorElegido: ConsorcioUserResponse;
    consorcioElegido;

    constructor(protected formBuilder: FormBuilder,
                public dialog: MatDialog,
                protected consorcioService: ConsorcioService,
                protected proveedorService: ProveedorService,
                protected gastoService: GastoService,
                protected snackBar: MatSnackBar) {
        this.createForm();
    }


    createForm() {
        this.gastoForm = this.formBuilder.group(
            {
                valor: ['', [Validators.required]],
            }
        );
    }

    eligeConsorcio($tihs) {
        console.log($tihs);
    }

    /*

                'valor' => $request->get('valor'),
            'fecha' => $request->get('fecha'),
            'proveedor_id' => $request->get('proveedor_id'),
            'consorcio_id' => $request->get('consorcio_id'),
            'mes' => $request->get('mes'),
            'anio' => $request->get('anio')
     */

    crearGasto() {
        const date = new Date(Date.now());
        const dateString = date.toISOString().substr(0, 19);
        const gastoNuevo = {
            fecha: '2018-07-26',
            consorcio_id: this.consorcioElegido,
            proveedor_id: this.proveedorElegido,
            mes: '07',
            anio: '2018',
            valor: this.gastoForm.get('valor').value
        };
        console.log(gastoNuevo);
        this.gastoService.create(gastoNuevo)
            .subscribe(
                () => {
                    this.snackBar.open(`Gasto Enviado!`, 'OK', {duration: 3000});
                },
                error => {
                    console.error(error);
                    this.snackBar.open(`Error al enviar el gasto! ${error.statusText}`, 'OK   ', {duration: 3000});
                    this.gastoForm.reset();
                }, () => this.gastoForm.reset()
            );
    }

    ngOnInit() {
        this.consorcioService.list(true)
            .subscribe(
                (data) => {
                    this.consorcios = data.body.data;
                },
                (error) => {
                    console.error(error);
                }
            );
        this.proveedorService.list()
            .subscribe(
                data => this.proveedores = data.body
            );

    }

}
