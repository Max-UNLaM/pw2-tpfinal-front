import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy';

const routes: Routes = [
    {
        path: 'admin',
        loadChildren: './pages/admin/admin.module#AdminModule',
        data: {
            preload: true
        }
    },
    {
        path: 'portal',
        loadChildren: './pages/portal/portal.module#PortalModule',
        data: {
            preload: true
        }
    },
    {
        path: 'user',
        loadChildren: './pages/user/user.module#UserModule',
        data: {
            preload: true
        }
    },
    {
        path: '*',
        redirectTo: '/portal',
        pathMatch: 'full',
        data: {}
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: SelectivePreloadingStrategy})],
    exports: [RouterModule],
    providers: [SelectivePreloadingStrategy]
})
export class AppRoutingModule {
}
