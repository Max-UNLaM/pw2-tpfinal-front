import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
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
        path: '',
        redirectTo: '/homepage',
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
