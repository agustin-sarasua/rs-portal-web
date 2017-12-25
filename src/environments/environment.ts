// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  hostUrl: 'http://localhost:8080/',
  firebase: {
    apiKey: "AIzaSyAFdF8E9cL-kmNp1wj1w_9JyTjmhThoiiM",
    authDomain: "real-estate-project-186513.firebaseapp.com",
    databaseURL: "https://real-estate-project-186513.firebaseio.com",
    projectId: "real-estate-project-186513",
    storageBucket: "real-estate-project-186513.appspot.com",
    messagingSenderId: "1039608478631"
  }
};
