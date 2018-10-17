import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../../auth-guard.service';
import {UserGastoComponent} from './user-gasto.component';
import {UserGastoDashboardComponent} from './user-gasto-dashboard/user-gasto-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: UserGastoComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                component: UserGastoDashboardComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserGastoRoutingModule {
}

export const routedComponents = [];
