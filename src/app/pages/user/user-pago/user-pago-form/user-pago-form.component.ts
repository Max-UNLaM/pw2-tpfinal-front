import {Component, OnInit} from '@angular/core';
import {Factura} from '../../../../providers/consorcio/factura/factura.model';
import {ActivatedRoute} from '@angular/router';
import {UsuarioService} from '../../../../providers/consorcio/usuario/usuario.service';
import {User} from '../../../../providers/consorcio/usuario/usuario.model';

@Component({
    selector: 'app-user-pago-form',
    templateUrl: './user-pago-form.component.html',
    styleUrls: ['./user-pago-form.component.scss']
})
export class UserPagoFormComponent implements OnInit {

    factura: Factura;
    user: User;

    constructor(private _route: ActivatedRoute, private _userService: UsuarioService) {
    }

    ngOnInit() {
        this._route.data
            .subscribe((data: { factura: Factura }) => {
                console.log(data);
                this.factura = data.factura as Factura;
            });
        this._userService.read()
            .subscribe(
                value => {
                    this.user = value.body as User;
                    console.log(value.body);
                },
                error => console.error(error)
            );
    }

}
