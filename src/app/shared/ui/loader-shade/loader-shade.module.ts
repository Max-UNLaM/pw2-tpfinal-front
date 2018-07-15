import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderShadeComponent} from './loader-shade.component';
import {MatProgressSpinnerModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatProgressSpinnerModule
    ],
    declarations: [LoaderShadeComponent],
    exports: [LoaderShadeComponent]
})
export class LoaderShadeModule {
}
