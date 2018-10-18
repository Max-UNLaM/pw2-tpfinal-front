import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../../auth-guard.service';
import {UserMinutaComponent} from './user-minuta.component';

const routes: Routes = [
    {
        path: '',
        component: UserMinutaComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                component: UserMinutaComponent
            },
            {
                path: '/:id',
                component: UserMinutaComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserMinutaRoutingModule {
}

export const routedComponents = [ ];
