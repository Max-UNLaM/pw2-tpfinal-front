import {Component, OnInit} from '@angular/core';
import {FacturaService} from '../../../providers/consorcio/factura/factura.service';
import {MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MainMenu} from '../../user/user-dashboard/user-dashboard.viewmodel';
import {MenuCard} from '../../../shared/menu-card/menu-card.model';
import {AdminMainMenu} from './admin-dashboard.viewmodel';

@Component({
    selector: 'app-admin-dashoard',
    templateUrl: './admin-dashoard.component.html',
    styleUrls: ['./admin-dashoard.component.scss']
})
export class AdminDashoardComponent implements OnInit {

    menuItems: MenuCard[] = [];
    title = 'Dashboard';
    gastoForm: FormGroup;
    mes;
    anio;

    constructor(
        protected formBuilder: FormBuilder,
        public facturaService: FacturaService,
        protected snackBar: MatSnackBar) {
    }

    createForm() {
        this.gastoForm = this.formBuilder.group(
            {
                mes: ['', [Validators.required]],
                anio: ['', [Validators.required]],
            }
        );
    }

    onSelect(event) {
        console.log(event);
    }

    ngOnInit() {
        this.menuItems = AdminMainMenu.items;
        this.createForm();
    }

    masa() {
        const mandar = {
            mes: this.gastoForm.get('mes').value,
            anio: this.gastoForm.get('anio').value
        };
        this.facturaService.create(
            mandar
        ).subscribe(
            () => {
                this.snackBar.open(`Facturas Enviadas!`, 'OK', {duration: 3000});
            },
            error => {
                console.error(error);
                this.snackBar.open(`Error al enviar el gasto! ${error.statusText}`, 'OK   ', {duration: 3000});
            }
        );
    }

}
