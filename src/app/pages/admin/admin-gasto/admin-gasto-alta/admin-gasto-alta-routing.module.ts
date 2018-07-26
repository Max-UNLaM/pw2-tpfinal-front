import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminGastoAltaComponent} from './admin-gasto-alta.component';
import {AuthGuardService} from '../../../../auth-guard.service';
const routes: Routes = [
    {
        path: '',
        component: AdminGastoAltaComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                component: AdminGastoAltaComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminGastoAltaRoutingModule {
}

