import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.sass']
})

//verifico/valido el icono que se tiene que asignar
//dos propiedades del objeto: icon y _code
export class WeatherIconComponent implements OnInit {

  icon : string = "weather";
  _code : number = 0; //va a aguardar el numero del codigo de la funcion setter

  /*input para el atributo code
  me permite recibir datos del exterior*/
  @Input() set code(value : number){ //es similar a esto: @Input() public code : number; pero el primero me deja poner loica personalizada
    this._code = value;
    this.icon = "";

    if (this._code >= 200 &&  this._code <= 250) {
      this.icon = "thunder";
    }
    if (this._code >= 300 &&  this._code <= 350) {
      this.icon = "rainy-4";
    }
    if (this._code >= 500 &&  this._code <= 550) {
      this.icon = "rainy-7";
    }

    if (this._code == 600) this.icon = "snowy-4";
    if (this._code == 601) this.icon = "snowy-5";
    if (this._code > 601 && this._code <= 650) this.icon = "snowy-6";

    if (this._code == 800) this.icon = "day";

    if (this._code == 801) this.icon = "cloudy-day-1";
    if (this._code == 802) this.icon = "cloudy-day-2";
    if (this._code > 802) this.icon = "cloudy-day-3";
  }

  constructor() { }

  ngOnInit(): void {
  }

  // this.icon = null;

// if (this._code >= 200 &&  this._code <= 250) {
//   this.icon = "thunder";
// }
// if (this._code >= 300 &&  this._code <= 350) {
//   this.icon = "rainy-4";
// }
// if (this._code >= 500 &&  this._code <= 550) {
//   this.icon = "rainy-7";
// }

// if (this._code == 600) this.icon = "snowy-4";
// if (this._code == 601) this.icon = "snowy-5";
// if (this._code > 601 && this._code <= 650) this.icon = "snowy-6";

// if (this._code == 800) this.icon = "day";

// if (this._code == 801) this.icon = "cloudy-day-1";
// if (this._code == 802) this.icon = "cloudy-day-2";
// if (this._code > 802) this.icon = "cloudy-day-3";
}
