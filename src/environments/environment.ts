// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAC9c5UYwZ2hsm_kRL4bZuNnHR3KATs2BE",
    authDomain: "todo-list-818c1.firebaseapp.com",
    databaseURL: "https://todo-list-818c1.firebaseio.com",
    projectId: "todo-list-818c1",
    storageBucket: "todo-list-818c1.appspot.com",
    messagingSenderId: "421436897111"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
