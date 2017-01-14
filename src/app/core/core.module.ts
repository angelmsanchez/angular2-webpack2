import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';

import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { LangsComponent } from './langs/langs.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule
    ],
    exports: [
        RouterModule,
        NavbarComponent,
        HeaderComponent,
        LangsComponent
    ],
    declarations: [
        NavbarComponent,
        HeaderComponent,
        LangsComponent
    ]
})

export class CoreModule { }
