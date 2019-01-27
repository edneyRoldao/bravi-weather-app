import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';
import { WeatherCondition } from './models/weather.interface';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class WeatherService {
  weatherObservable = new Subject<WeatherCondition>();
  errorResponseObservable = new Subject<HttpErrorResponse>();

  constructor(private http: HttpClient) {}

  getCurrentWeather(cityName: string) {
    const URL = environment.api.weather.service.url;
    const ID_APP = environment.api.weather.service.idApp;

    // params
    const params = {};
    params['q'] = cityName;
    params['units'] = 'metric';
    params['appid'] = ID_APP;

    this.http
      .get<WeatherCondition>(URL, { params })
      .catch(this.errorHandler)
      .subscribe((weather: WeatherCondition) => this.weatherObservable.next(weather),
                 (error: HttpErrorResponse) => this.errorResponseObservable.next(error));
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error);
  }

}
