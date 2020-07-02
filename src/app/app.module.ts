import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RevenuePieChartComponent } from './revenue-pie-chart/revenue-pie-chart.component';
import { RevenueWaterfallChartComponent } from './revenue-waterfall-chart/revenue-waterfall-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    RevenuePieChartComponent,
    RevenueWaterfallChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
