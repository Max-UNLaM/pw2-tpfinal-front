import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {UnidadComponent} from './unidad/unidad.component';
import {AuthGuardService} from '../../auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuardService],
        children: [{
            path: 'unidad',
            component: UnidadComponent
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

