import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PagoListRow} from '../pago-list.viewmodel';

@Component({
    selector: 'app-pago-process',
    templateUrl: './pago-process.component.html',
    styleUrls: ['./pago-process.component.scss']
})
export class PagoProcessComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<PagoProcessComponent>,
        @Inject(MAT_DIALOG_DATA) public data: PagoListRow
    ) {
    }

    ngOnInit() {
    }

    procesar(veredicto: boolean) {
        return this.dialogRef.close(veredicto);
    }
}
