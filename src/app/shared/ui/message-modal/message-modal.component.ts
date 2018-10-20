import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MessageModalViewmodel} from './message-modal.viewmodel';

@Component({
    selector: 'app-redirect-modal',
    templateUrl: './message-modal.component.html',
    styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<MessageModalComponent>,
                @Inject(MAT_DIALOG_DATA) public data: MessageModalViewmodel) {
    }

    ngOnInit() {
    }

    action(execute: () => void) {
        this.dialogRef.close();
    }
}
