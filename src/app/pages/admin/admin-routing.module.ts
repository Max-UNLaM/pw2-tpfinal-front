import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {UnidadComponent} from './unidad/unidad.component';
import {AuthGuardService} from '../../auth-guard.service';
import {ConsorcioComponent} from './consorcio/consorcio.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'unidad',
                component: UnidadComponent
            },
            {
                path: 'consorcio',
                component: ConsorcioComponent
            }]
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
    UnidadComponent
];

