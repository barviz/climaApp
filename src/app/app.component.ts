import { Component } from '@angular/core';
import { CurrentWeatherService } from './services/current-weather.service';
import { ForecastService } from './services/forecast.service';
import { GeolocationService } from './services/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';

  /* llamo al metodo get del current-weather.service.ts
  solicito la entrega de un objeto weather de la clase currentweatherservice*/
  //constructor(private weatherService: CurrentWeatherService) { }
  constructor(private geolocationService : GeolocationService) { }

  /* este metodo se va a ejecutar cuando el componente este listo
  llamo del objeto weather el metodo get que haga la peticion y muestre en consola
   */
  ngOnInit() {
    //this.weather.get();
    //this.weatherService.weather$.subscribe(console.log)
  }
}

//se uso de prueba
//ahora se trabaja en current-weather.components.ts
