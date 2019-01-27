import {Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherCondition } from '../../models/weather.interface';
import { Subscription } from 'rxjs/Subscription';
import { WeatherService } from '../../weather.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit, OnDestroy {
  weatherCondition: WeatherCondition;
  errorResponse: HttpErrorResponse;
  subscription: Subscription;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.subscription = this.weatherService.weatherObservable.subscribe((weather: WeatherCondition) => {
      this.weatherCondition = weather;
    });

    this.subscription = this.weatherService.errorResponseObservable.subscribe((error: HttpErrorResponse) => {
      this.errorResponse = error;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
