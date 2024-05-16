import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {LiveMoneyCourseModule} from "../widgets/live-money/index.module";

@NgModule({
  imports: [
    BrowserModule,
    LiveMoneyCourseModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],

})
export class AppModule {}
