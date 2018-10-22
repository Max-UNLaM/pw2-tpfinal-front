import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../../auth-guard.service';
import {UserReclamoComponent} from './user-reclamo.component';
import {UserReclamoDashboardComponent} from './user-reclamo-dashboard/user-reclamo-dashboard.component';
import {UserReclamoCreateComponent} from './user-reclamo-create/user-reclamo-create.component';
import {UserReclamoListComponent} from './user-reclamo-list/user-reclamo-list.component';

const routes: Routes = [
    {
        path: '',
        component: UserReclamoComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                component: UserReclamoDashboardComponent
            },
            {
                path: 'create',
                component: UserReclamoCreateComponent
            },
            {
                path: 'list',
                component: UserReclamoListComponent
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

