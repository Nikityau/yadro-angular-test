import {platformBrowser} from '@angular/platform-browser';
import {AppModule} from "./app/app.module";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(e => console.log(e));
