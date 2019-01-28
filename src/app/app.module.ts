import { NgModule } from '@angular/core';

// custom modules
import { WeatherDashboardModule } from './weather-dashboard/weather-dashboard.module';

// components
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WeatherDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
