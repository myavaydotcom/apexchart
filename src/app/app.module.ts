import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import   ApexCharts from 'apexcharts';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstChartComponent } from './apex-chart/first-chart/first-chart.component';
import { ErrorComponent } from './error/error.component';
import { AreaColumnChartComponent } from './apex-chart/area-column-chart/area-column-chart.component';
import { CandleChartComponent } from './apex-chart/candle-chart/candle-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstChartComponent,
    ErrorComponent,
    AreaColumnChartComponent,
    CandleChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    FormsModule,
    ApexCharts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
