import { Component } from '@angular/core';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent {
  cityNameSearch: string;

  constructor(private weatherService: WeatherService) { }

  onSearchChange() {
    this.weatherService.getCurrentWeather( this.cityNameSearch );
  }

}
