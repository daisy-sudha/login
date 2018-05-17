import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

import { MyformComponent } from './myform/myform.component'

export const routes : Routes = [
    { path: '', component: MyformComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);