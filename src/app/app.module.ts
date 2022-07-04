import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './component/current-weather/current-weather.component';
import { WeatherIconComponent } from './component/weather-icon/weather-icon.component';
import { WeatherCardComponent } from './component/weather-card/weather-card.component';
import { ForecastComponent } from './component/forecast/forecast.component';
import { LoadingComponent } from './component/loading/loading.component';
import { GeolocationButtonComponent } from './component/geolocation-button/geolocation-button.component';
import { FooterComponent } from './component/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    WeatherIconComponent,
    WeatherCardComponent,
    ForecastComponent,
    LoadingComponent,
    GeolocationButtonComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
