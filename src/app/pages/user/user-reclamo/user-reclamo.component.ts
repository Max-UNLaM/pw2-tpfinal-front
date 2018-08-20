import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatSnackBar} from '@angular/material';
import {UserReclamoUnidadesComponent} from './user-reclamo-unidades/user-reclamo-unidades.component';
import {UnidadResponse} from '../../../providers/consorcio/unidad/unidad.interface';
import {stringify} from 'querystring';
import {ReclamoService} from '../../../providers/consorcio/reclamo/reclamo.service';

@Component({
    selector: 'app-user-reclamo',
    templateUrl: './user-reclamo.component.html',
    styleUrls: ['./user-reclamo.component.scss']
})
export class UserReclamoComponent implements OnInit {
    reclamoForm: FormGroup;
    unidadSeleccionada: UnidadResponse;

    constructor(protected formBuilder: FormBuilder,
                public dialog: MatDialog,
                protected reclamoService: ReclamoService,
                public snackBar: MatSnackBar
    ) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.reclamoForm = this.formBuilder.group(
            {
                unidad_id: ['', [Validators.required]],
                motivo: ['', [Validators.required]],
            }
        );
    }


    crearReclamo() {
        const userToken = window.localStorage.getItem('userToken');
        const date = new Date(Date.now());
        const dateString = date.toISOString().substr(0, 19);
        console.log(dateString);
        this.reclamoService.create({
            motivo: this.reclamoForm.get('motivo').value,
            unidad_id: this.unidadSeleccionada.id,
            fecha_reclamo: dateString
        }, userToken)
            .subscribe(
                () => {
                    this.snackBar.open(`Reclamo Enviado!`, 'OK', {duration: 3000});
                },
                error => {
                    this.snackBar.open(`Error al enviar el reclamo! ${error.statusText}`, 'OK   ', {duration: 3000});
                    this.reclamoForm.reset();
                    this.unidadSeleccionada = null;
                },
                () => {
                    this.reclamoForm.reset();
                    this.unidadSeleccionada = null;
                }
            );
    }

    elegirUnidad() {
        const dialogRef = this.dialog.open(UserReclamoUnidadesComponent, {
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(
            (res: UnidadResponse) => {
                this.unidadSeleccionada = res;
                this.reclamoForm.patchValue({
                    unidad_id: stringify(res.id)
                });
            }
        );
    }
}
