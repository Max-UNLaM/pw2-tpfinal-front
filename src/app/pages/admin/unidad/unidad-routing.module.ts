import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnidadComponent} from './unidad.component';
import {AuthGuardService} from '../../../auth-guard.service';
import {UnidadListaComponent} from './lista/unidad-lista.component';
import {UnidadAltaComponent} from './alta/unidad-alta.component';

const routes: Routes = [
    {
        path: '',
        component: UnidadComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                component: UnidadListaComponent
            },
            {
                path: 'lista',
                component: UnidadListaComponent
            },
            {
                path: 'alta',
                component: UnidadAltaComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UnidadRoutingModule {
}

export const routedComponents = [
    UnidadComponent,
    UnidadListaComponent,
    UnidadAltaComponent
];

