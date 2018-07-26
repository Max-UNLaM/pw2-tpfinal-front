import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatSnackBar} from '@angular/material';
import {GastoService} from '../../../../providers/consorcio/gasto/gasto.service';
import {ConsorcioService} from '../../../../providers/consorcio/consorcio/consorcio.service';
import {ConsorcioUserResponse} from '../../../../providers/consorcio/consorcio/consorcio.interface';
import {ProveedorService} from '../../../../providers/consorcio/proveedor/proveedor.service';

@Component({
    selector: 'app-admin-gasto-alta',
    templateUrl: './admin-gasto-alta.component.html',
    styleUrls: ['./admin-gasto-alta.component.scss']
})
export class AdminGastoAltaComponent implements OnInit {
    gastoForm: FormGroup;
    accessError;
    accessErrorText;
    consorcios: ConsorcioUserResponse[] = [];

    constructor(protected formBuilder: FormBuilder,
                public dialog: MatDialog,
                protected gastoService: GastoService,
                public snackBar: MatSnackBar,
                protected consorcioService: ConsorcioService,
                protected proveedorService: ProveedorService) {
        this.createForm();
    }


    createForm() {
        this.gastoForm = this.formBuilder.group(
            {
                valor: ['', [Validators.required]],
            }
        );
    }

    elegirConsorcio(consorcioLoco) {
        console.log(consorcioLoco);
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

    }

    ngOnInit() {
        this.consorcioService.list(true)
            .subscribe(
                (data) => {
                    this.consorcios = data.body;
                },
                (error) => {
                    console.error(error);
                }
            );
        this.proveedorService.list()
            .subscribe(
                data => console.log(data)
            );

    }

}
