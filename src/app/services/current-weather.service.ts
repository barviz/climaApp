import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coords } from './../../structures/coords.structure';
import {map} from 'rxjs/operators';
import { Weather } from 'src/structures/weather.structure';
import { GeolocationService } from './geolocation.service';

/*isDevMode funcion que retorna un booleano y es verdadero
cuando el entorno en el que estamos ejecutando nuestra aplicacion es el de desarrollo
y falso si es el de produccion*/

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  /* declaro un subjet llamado weathersubjet, objeto de la clase subjet
  any porque puede enviar cualquier tipo de informacion
  es instanciado como un nuevo sujeto de tipo any*/
  public weatherSubject : Subject<any> = new Subject<any>();

  /* declaro un observable, una fuente a la que puedo subsribirme para recibir informacion */
  public weather$ : Observable<any> = this.weatherSubject.asObservable(); //sujeto siendo un observable

  /* propiedad que necesitamos para realizar la peticion */
  endpoint: string = 'https://api.openweathermap.org/data/2.5/weather'; //direccion a la que se debe enviar la clave

  constructor(private http: HttpClient,  private geolocationService : GeolocationService) {

    /*cuando haya nuevos datos en el observable,
    estos van a pasar por la funcion map que los va a recibir como argumento
    lo que retorne map va a sustituir los datos que habia recibido */
    this.weather$ = this.weatherSubject.asObservable().pipe(
      map((data : any)=>{
      let mainWeather = data.weather[0];

      let weather : Weather = { //instancio un nuevo objeto llamado weather de la clase Weather
        name: data.name,
        cod: data.cod,
        temp: data.main.temp,
        ...mainWeather //agarra todas las propiedades y las va a combinar con el objeto
      };
      return weather;
    })
  );

  this.geolocationService.coords$.subscribe((coords) => {
    this.get(coords);
  });

/*    this.get({
      lat: -34.545339,
      lon: -58.449715
    }); */
    //obtengo los datos
  }

  /* metodo que va a retornar un observable(una manera de trabajar con datos que descargamos de manera asincrona
    u operaciones que se ejecutan de manera asincrona)
    la informacion del observable se va a recibir una vez subscriptos a el*/
  get(coords : Coords) {
    //this.http.get('../../assets/weather.json').subscribe(console.log);
    //let observable = this.http.get('../../assets/weather.json').subscribe(this.weatherSubject); //sujeto siendo un observer
    /*let args : string = `?lat=${coords.lat}&lon=${coords.lon}&APPID=${environment.key}&units=metric`;
    let observable = this.http.get(this.endpoint + args).subscribe(this.weatherSubject);
  */
     let args: string = `?lat=${coords.lat}&lon=${coords.lon}&APPID=${environment.key}&units=metric`;
     let url = this.endpoint + args;

    /* if(isDevMode()){
      url = '../../assets/weather.json';
     }*/

     this.http.get(url).subscribe(this.weatherSubject);
  }

  /*observables: objetos a los que nos subscribimos y nos entregan informacion
observer: cumple con una interfaz observer que la misma libreria define y tiene metodos como next que se utilizan como subsriptores de los observables
los observer se subscriben a los observablews y usan el metodo next para generar notificaciones de que recibieron nueva informacion del observable */
}
