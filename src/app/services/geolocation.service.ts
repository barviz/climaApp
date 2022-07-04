import { Injectable } from '@angular/core';
import { Coords } from '../../structures/coords.structure';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  public coordsSubject: Subject<Coords> = new Subject<Coords>();;
  public coords$ : Observable<Coords> = this.coordsSubject.asObservable();
  public permission$ : Promise<string>;
  public coordsPromise !: Promise<Coords>;


  constructor() {
    this.permission$ = (navigator as any).permissions.query({name:'geolocation'})
                          .then(permission => permission.state);
  }

  requestGeolocation(){ //metodo que se va a llamar desde los componentes cuando estos necesiten obtener la ubicacion
    if(!this.coordsPromise){
      this.coordsPromise = this.getGeolocation()
    }

    this.coordsPromise.then(coords=>{
      this.coordsSubject.next(coords);
    })
  }

  getGeolocation() : Promise<Coords>{
    return new Promise((res,rej)=>{ //pasa una fc al constructor que recibe dos argumentos resolucion o rechazo
      //la primera se cumple si la fc asincrona hizo bien su trabajo sino se ejecuta la segunda si algo salio mal
      if(!navigator || !('geolocation' in navigator)) return rej('Geolocation is not available');

      (navigator as any).geolocation.getCurrentPosition((position)=>{
        res({ //se resuelve la promesa
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      });

    });
  }
}
