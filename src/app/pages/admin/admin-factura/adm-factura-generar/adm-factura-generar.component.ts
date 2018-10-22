import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Consorcio} from '../../../../providers/consorcio/consorcio/consorcio.interface';
import {GeneracionMasivaService} from '../../../../providers/consorcio/generacion-masiva/generacion-masiva.service';
import {GeneracionMasiva} from '../../../../providers/consorcio/generacion-masiva/generacion-masiva';
import {Liquidar} from '../../../../providers/consorcio/liquidacion/liquidacion.model';
import {MatSnackBar} from '@angular/material';
import {Expensar} from '../../../../providers/consorcio/expensa/expensa.model';
import {Facturar} from '../../../../providers/consorcio/factura/factura.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-adm-factura-generar',
    templateUrl: './adm-factura-generar.component.html',
    styleUrls: ['./adm-factura-generar.component.scss']
})
export class AdmFacturaGenerarComponent implements OnInit {

    liquidacionForm: FormGroup;
    expensaForm: FormGroup;
    facturacionForm: FormGroup;
    consorcio: Consorcio;
    liquidacion = false;
    expensa = false;
    factura = false;
    liquidacionGen: Liquidar;
    mesBase: number;
    anioBase: number;

    constructor(private _formBuilder: FormBuilder,
                private _generacionMasivaService: GeneracionMasivaService,
                public snackBar: MatSnackBar,
                private router: Router) {
    }

    ngOnInit() {
        this.liquidacionForm = this._formBuilder.group({
                mes: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
                anio: ['', [Validators.required, Validators.min(2018), Validators.max(2100)]]
            }
        );
        this.expensaForm = this._formBuilder.group({
                mes: [this.mesBase, [Validators.required, Validators.min(1), Validators.max(12)]],
                anio: [this.anioBase, [Validators.required, Validators.min(2018), Validators.max(2100)]]
            }
        );
        this.facturacionForm = this._formBuilder.group({
                mes: [this.anioBase, [Validators.required, Validators.min(1), Validators.max(12)]],
                anio: [this.anioBase, [Validators.required, Validators.min(2015), Validators.max(2019)]]
            }
        );
    }

    liquidar() {
        const liquidar: Liquidar = new Liquidar();
        liquidar.endpoint = 'liquidacion';
        liquidar.periodo = {
            consorcio_id: this.consorcio.id,
            mes: this.liquidacionForm.getRawValue().mes,
            anio: this.liquidacionForm.getRawValue().anio
        };
        this.generar(liquidar);
    }

    finalizar() {
        this.router.navigate(['/', 'admin']).then(
            navegacion => {
                console.log(navegacion);
            }, error => {
                console.error(error);
            }
        );
    }

    expensar() {
        const expensar: Expensar = new Expensar();
        expensar.periodo = {
            consorcio_id: this.consorcio.id,
            mes: this.expensaForm.getRawValue().mes,
            anio: this.expensaForm.getRawValue().anio
        };
        this.generar(expensar);
    }

    facturar() {
        const expensar: Facturar = new Facturar();
        expensar.periodo = {
            consorcio_id: this.consorcio.id,
            mes: this.facturacionForm.getRawValue().mes,
            anio: this.facturacionForm.getRawValue().anio
        };
        this.generar(expensar);
    }

    generar(generacionMasiva: GeneracionMasiva) {
        this._generacionMasivaService.create(generacionMasiva).subscribe(
            exito => {
                this[generacionMasiva.endpoint] = true;
                console.log(exito);
                if (exito.status === 204) {
                    this.snackBar.open(`La generación masiva de ${generacionMasiva.endpoint} de este período ya ha sido realizada`,
                        'OK', {duration: 3000});
                } else if (exito.status === 201 || exito.status === 200) {
                    this.snackBar.open(`${generacionMasiva.endpoint} generado!`,
                        'OK', {duration: 3000});
                }
            }, error => {
                console.log(error);
                if (error.status === 202) {
                    this[generacionMasiva.endpoint] = true;
                    this.snackBar.open(`${generacionMasiva.endpoint} generado!`,
                        'OK', {duration: 3000});
                } else {
                    console.error(error);
                    this.snackBar.open(error.body, 'OK', {duration: 3000});
                }
            }
        );
    }

    whenConsorcioSelected(selected: Consorcio) {
        this.consorcio = selected;
    }

}
