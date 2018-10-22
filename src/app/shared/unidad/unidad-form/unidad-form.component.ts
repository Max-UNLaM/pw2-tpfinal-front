import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Consorcio, ConsorcioCreate, ConsorcioResponse} from '../../../providers/consorcio/consorcio/consorcio.interface';

@Component({
    selector: 'app-unidad-form',
    templateUrl: './unidad-form.component.html',
    styleUrls: ['./unidad-form.component.scss']
})
export class UnidadFormComponent implements OnInit {


    unidadForm: FormGroup;

    constructor(
        protected formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<UnidadFormComponent>,
        @Inject(MAT_DIALOG_DATA) public consorcio: Consorcio
    ) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.unidadForm = this.formBuilder.group(
            {
                nombre: ['', [Validators.required]],
            }
        );
    }

    crearUnidad() {
        this.dialogRef.close({
            nombre: this.unidadForm.get('nombre').value,
            direccion: this.consorcio.direccion,
            localidad: this.consorcio.localidad,
            provincia: this.consorcio.provincia,
            consorcio_id: this.consorcio.id
        });
    }
}
