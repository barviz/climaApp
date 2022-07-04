//archivo que sirve para colocar información sensible o informacion que vaya a cambiar entre los entornos
//se va trabajar acá con las credenciales de desarrollo que nos entrega el servicio web que cosumimos
//cuando se use esta credencial en nuestro código el uso será transparente sin importar en que entorno se esté
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  key:'dda7c23875b8047ccec4ab459eadea59' //key de mi openweather
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
