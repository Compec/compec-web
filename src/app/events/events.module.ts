import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events.component';
import { EventComponent } from './event/event.component';
import {EventsGuard} from './events.guard';
import {SharedModule} from '../shared.module';

const appRoutes: Routes = [
    {path: '', canActivate: [], component: EventsComponent, data: {state: 'events'}},
    {path: ':eventName', canActivate: [], component: EventComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    SharedModule
  ],
  declarations: [EventsComponent, EventComponent]
})
export class EventsModule { }
