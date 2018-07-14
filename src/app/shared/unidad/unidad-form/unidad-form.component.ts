import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-unidad-form',
    templateUrl: './unidad-form.component.html',
    styleUrls: ['./unidad-form.component.scss']
})
export class UnidadFormComponent implements OnInit {


    unidadForm: FormGroup;

    constructor(protected formBuilder: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.unidadForm = this.formBuilder.group(
            {
                nombre: ['', [Validators.required]],
                direccion: ['', [Validators.required]],
                localidad: ['', [Validators.required]],
                provincia: ['', [Validators.required]],
                consorcio_id: ['', [Validators.required, Validators.pattern(new RegExp('^[0-9]*$'))]],
            }
        );
    }
}
