import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../../auth-guard.service';
import {UserReclamoComponent} from './user-reclamo.component';
import {UserReclamoDashboardComponent} from './user-reclamo-dashboard/user-reclamo-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: UserReclamoComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                component: UserReclamoDashboardComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserReclamoRoutingModule {
}

export const routedComponents = [
    UserReclamoComponent
];

