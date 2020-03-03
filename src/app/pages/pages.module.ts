import { GraficoDonaComponent } from './../components/grafico-dona/grafico-dona.component';
import { IncrementadorComponent } from './../components/incrementador/incrementador.component';
import { PAGES_ROUTERS } from './pages.router';

import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

//ng2-chart
import { ChartsModule } from 'ng2-charts';


import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


@NgModule({

    declarations:[

        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent
        
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        
    ],
    imports:[
        
       SharedModule,
       PAGES_ROUTERS,
       FormsModule,
       ChartsModule
       
    ]

})

export class PagesModule { }


