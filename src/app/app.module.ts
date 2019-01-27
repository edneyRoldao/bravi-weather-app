import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

// custom modules
import { WeatherDashboardModule } from './weather-dashboard/weather-dashboard.module';

// components
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    FormsModule,
    CommonModule,
    BrowserModule,

    // custom modules
    WeatherDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
