import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routedComponents, UserReclamoRoutingModule} from './user-reclamo-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule, MatListModule,
    MatPaginatorModule, MatSnackBarModule,
    MatTableModule
} from '@angular/material';
import {UnidadService} from '../../../providers/consorcio/unidad/unidad.service';
import { UserReclamoUnidadesComponent } from './user-reclamo-unidades/user-reclamo-unidades.component';
import {LoaderShadeModule} from '../../../shared/ui/loader-shade/loader-shade.module';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserReclamoRoutingModule,
        MatDialogModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatListModule,
        MatSnackBarModule,
        LoaderShadeModule
    ],
    declarations: [...routedComponents, UserReclamoUnidadesComponent],
    providers: [UnidadService],
    entryComponents: [UserReclamoUnidadesComponent]
})
export class UserReclamoModule {
}
