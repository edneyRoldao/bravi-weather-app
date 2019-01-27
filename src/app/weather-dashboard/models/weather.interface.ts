export interface WeatherCondition {
  id: number;
  name: string;
  cod: number;
  dt: number;
  visibility: number;
  base: string;
  coord: Coordinates;
  weather: Weather;
  main: Main;
  wind: Wind;
  clouds: Cloud;
  sys: Sys;

}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Cloud {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: number;
  sunrise: number;
  sunset: number;
}
