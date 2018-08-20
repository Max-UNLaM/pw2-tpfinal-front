import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../../auth-guard.service';
import {UserReclamoComponent} from './user-reclamo.component';

const routes: Routes = [
    {
        path: '',
        component: UserReclamoComponent,
        canActivate: [AuthGuardService]
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

