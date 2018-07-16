import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AuthGuardService} from '../../auth-guard.service';
import {ConsorcioComponent} from './consorcio/consorcio.component';
import {ExpensaComponent} from './expensa/expensa.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'unidad',
                loadChildren: './unidad/unidad.module#UnidadModule',
                data: {
                    preload: true
                }
            },
            {
                path: 'consorcio',
                component: ConsorcioComponent
            },
            {
                path: 'expensa',
                component: ExpensaComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}

export const routedComponents = [
    AdminComponent,
    ConsorcioComponent,
    ExpensaComponent
];

