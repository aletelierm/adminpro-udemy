import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

//Modulo
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
    declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component

    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})
export class PagesModule{ }