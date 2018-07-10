import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import {AboutGuard} from './about.guard';
import {SharedModule} from '../shared.module';
import { ManagementComponent } from './management/management.component';
import {MemberProfileComponent} from '../components/member-profile/member-profile.component';

const appRoutes: Routes = [
    {path: '', canActivate: [], component: AboutComponent, data: {state: 'about'}},
  {path: 'yonetimkurulu', component: ManagementComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    SharedModule
  ],
  declarations: [AboutComponent, ManagementComponent, MemberProfileComponent]
})
export class AboutModule { }
