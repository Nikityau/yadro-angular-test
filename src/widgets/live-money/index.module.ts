import {NgModule} from "@angular/core";
import {LiveMoneyComponent} from "./live-money.component";
import {MoneyPipe} from "./pipes/money.pipe";
import {LiveMoneyService} from "./live-money.service";
import {CourseFilterPipe} from "./pipes/course-filter.pipe";
import {ChartPipe} from "./pipes/chart.pipe";


@NgModule({
  imports: [
    LiveMoneyComponent,
  ],
  providers: [
    MoneyPipe,
    LiveMoneyService,
    CourseFilterPipe,
    ChartPipe
  ],
  exports: [
    LiveMoneyComponent,
  ]
})
export class LiveMoneyCourseModule {
}
