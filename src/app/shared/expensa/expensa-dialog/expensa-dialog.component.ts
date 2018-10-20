import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ExpensaResponse} from '../../../providers/consorcio/expensa/expensa.model';

@Component({
    selector: 'app-expensa-dialog',
    templateUrl: './expensa-dialog.component.html',
    styleUrls: ['./expensa-dialog.component.scss']
})
export class ExpensaDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<ExpensaDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public expensa: ExpensaResponse) {
    }

    ngOnInit() {
    }

}
