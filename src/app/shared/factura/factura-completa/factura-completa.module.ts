import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FacturaCompletaComponent} from './factura-completa.component';
import {MatButtonModule, MatCardModule, MatDividerModule, MatListModule, MatTableModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatListModule,
        MatDividerModule,
        MatTableModule,
        MatButtonModule
    ],
    declarations: [FacturaCompletaComponent],
    exports: [FacturaCompletaComponent]
})
export class FacturaCompletaModule {
}
