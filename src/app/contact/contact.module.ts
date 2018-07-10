import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact.component';
import {SharedModule} from '../shared.module';

const appRoutes: Routes = [
    {path: '', component: ContactComponent, data: {state: 'contact'}}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    SharedModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
