import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [],
    exports: [
        TranslateModule,
        CommonModule
    ]
})

export class SharedModule { }
