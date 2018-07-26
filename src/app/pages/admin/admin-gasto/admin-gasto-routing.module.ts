import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../../auth-guard.service';
import {AdminGastoComponent} from './admin-gasto.component';
import {AdminGastoListaComponent} from './admin-gasto-lista/admin-gasto-lista.component';
const routes: Routes = [
    {
        path: '',
        component: AdminGastoComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                component: AdminGastoListaComponent
            },
            {
                path: 'lista',
                component: AdminGastoListaComponent
            },
            {
                path: 'alta',
                loadChildren: './admin-gasto-alta/admin-gasto-alta.module#AdminGastoAltaModule',
                data: {
                    preload: true
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminGastoRoutingModule {
}

export const routedComponents = [
    AdminGastoComponent,
    AdminGastoListaComponent
];

