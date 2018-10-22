import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Consorcio} from '../../../../providers/consorcio/consorcio/consorcio.interface';

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

    constructor(private _formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.liquidacionForm = this._formBuilder.group({
                mes: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
                anio: ['', [Validators.required, Validators.min(2018), Validators.max(2100)]]
            }
        );
        this.expensaForm = this._formBuilder.group({
                mes: [this.liquidacionForm.getRawValue().mes, [Validators.required, Validators.min(1), Validators.max(12)]],
                anio: [this.liquidacionForm.getRawValue().anio, [Validators.required, Validators.min(2018), Validators.max(2100)]]
            }
        );
        this.facturacionForm = this._formBuilder.group({
                mes: [this.liquidacionForm.getRawValue().mes, [Validators.required, Validators.min(1), Validators.max(12)]],
                anio: [this.liquidacionForm.getRawValue().anio, [Validators.required, Validators.min(2015), Validators.max(2019)]]
            }
        );
    }

    whenConsorcioSelected(selected: Consorcio) {
        this.consorcio = selected;
    }

}
