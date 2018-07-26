import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy';
import {AuthGuardService} from './auth-guard.service';

const routes: Routes = [
    {
        path: 'admin',
        loadChildren: './pages/admin/admin.module#AdminModule',
        canLoad: [AuthGuardService]
    },
    {
        path: 'portal',
        loadChildren: './pages/portal/portal.module#PortalModule'
    },
    {
        path: 'user',
        loadChildren: './pages/user/user.module#UserModule',
        canLoad: [AuthGuardService],
    },
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full',
        data: {
            preload: true
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        enableTracing: true,
        preloadingStrategy: SelectivePreloadingStrategy
    })],
    exports: [RouterModule],
    providers: [SelectivePreloadingStrategy]
})
export class AppRoutingModule {
}
