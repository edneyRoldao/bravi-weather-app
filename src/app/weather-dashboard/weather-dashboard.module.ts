import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Containers
import { WeatherDashboardComponent } from './containers/weather-dashboard/weather-dashboard.component';

// Components
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';

// service
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    WeatherDashboardComponent,
    WeatherSearchComponent,
    WeatherDetailComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    WeatherDashboardComponent
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherDashboardModule {}
