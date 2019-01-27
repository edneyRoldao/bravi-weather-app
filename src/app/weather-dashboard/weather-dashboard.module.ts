import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherDashboardComponent } from './containers/weather-dashboard/weather-dashboard.component';

@NgModule({
  declarations: [
    WeatherDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherDashboardComponent
  ]
})
export class WeatherDashboardModule {}
