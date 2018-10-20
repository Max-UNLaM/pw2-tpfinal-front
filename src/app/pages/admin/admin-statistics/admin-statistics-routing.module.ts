import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../../auth-guard.service';
import {AdminStatisticsComponent} from './admin-statistics.component';
const routes: Routes = [
    {
        path: '',
        component: AdminStatisticsComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                component: AdminStatisticsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminStatisticsRoutingModule {
}

export const routedComponents = [
];

