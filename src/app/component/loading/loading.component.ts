import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from 'src/app/services/current-weather.service';
import { loadingAnimation } from './../animations/loading.animation';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass'],
  animations: [loadingAnimation()]
})
export class LoadingComponent implements OnInit {

  _elements: string[] = ['#ffe5ec', '#ff80a0', '#ff2e63', '#800020', '#1a0006']; //arreglo con colores

  public elements !: string[];


  constructor(public currentWeatherService : CurrentWeatherService) { }

  ngOnInit() {
    this.set();
  }

  set(){
    this.elements = this._elements; //coloca los elementos
    this.scheduleNextIteration();
  }

  scheduleNextIteration(){
    setTimeout(()=>{
      if(this.elements.length == 0) return this.set();

      this.clear();

    },100 * this._elements.length + 300);
  }

  clear(){
    this.elements = [];
    this.scheduleNextIteration();
  }

}
