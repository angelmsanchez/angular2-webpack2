import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    imports: [
        FormsModule,
        HomeRoutingModule,
        SharedModule
    ],
    declarations: [
        HomeComponent
    ]
})

export class HomeModule { }
