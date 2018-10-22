import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Consorcio, ConsorcioListResponse, ConsorcioUserResponse} from '../../../providers/consorcio/consorcio/consorcio.interface';
import {ConsorcioService} from '../../../providers/consorcio/consorcio/consorcio.service';

@Component({
    selector: 'app-consorcio-select',
    templateUrl: './consorcio-select.component.html',
    styleUrls: ['./consorcio-select.component.scss']
})
export class ConsorcioSelectComponent implements OnInit {

    @Input() isAdmin = false;
    @Input() todos = false;
    @Output() consorcioResponse = new EventEmitter<Consorcio | Consorcio []>();
    consorcios: Consorcio[];
    consorcioElegido: Consorcio;
    allConsorcios: {
        id: -1,
        nombre: 'all';
        direccion: 'all';
        localidad: 'all';
    };

    constructor(protected consorcioService: ConsorcioService) {
    }

    ngOnInit() {
        this.consorcioService.list(this.isAdmin)
            .subscribe(
                (data) => {
                    console.log(data);
                    this.consorcios = data.body.data;
                },
                (error) => {
                    console.error(error);
                }
            );
    }

    emitConsorcio() {
        if (this.consorcioElegido.id < 0) {
            this.consorcioResponse.emit(this.consorcios);
        } else {
            this.consorcioResponse.emit(this.consorcioElegido);
        }
    }

}
