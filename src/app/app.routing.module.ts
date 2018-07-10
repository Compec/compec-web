import {NgModule} from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full', data: {state: 'home'}},
    { path: 'etkinliklerimiz', loadChildren: './events/events.module#EventsModule'},
    { path: 'hakkımızda', loadChildren: './about/about.module#AboutModule'},
    { path: 'bizeulas', loadChildren: './contact/contact.module#ContactModule'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }