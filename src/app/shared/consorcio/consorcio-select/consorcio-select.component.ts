import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConsorcioUserResponse} from '../../../providers/consorcio/consorcio/consorcio.interface';
import {ConsorcioService} from '../../../providers/consorcio/consorcio/consorcio.service';

@Component({
    selector: 'app-consorcio-select',
    templateUrl: './consorcio-select.component.html',
    styleUrls: ['./consorcio-select.component.scss']
})
export class ConsorcioSelectComponent implements OnInit {

    @Input() isAdmin = false;
    @Output() consorcioResponse = new EventEmitter<ConsorcioUserResponse | ConsorcioUserResponse[]>();
    userToken: string;
    consorcios: ConsorcioUserResponse[] = [];
    consorcioElegido: ConsorcioUserResponse;
    allConsorcios: {
        id: -1,
        nombre: 'all';
        direccion: 'all';
        localidad: 'all';
    };

    constructor(protected consorcioService: ConsorcioService) {
        this.userToken = window.localStorage.getItem('userToken');
    }

    ngOnInit() {
        this.consorcioService.list(this.isAdmin)
            .subscribe(
                (data) => {
                    this.consorcios = data.body;
                    this.consorcioResponse.emit(data.body);
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
