import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

export const routes: Route[] = [
    {
        path: '',
        component: DashboardComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule { }
