import {Pipe, PipeTransform} from "@angular/core";
import {TMonthCourse} from "../index.types";

@Pipe({
  standalone: true,
  name: 'chartPipe'
})
export class ChartPipe implements PipeTransform {
  transform(month: TMonthCourse | null | undefined, moneyCodes: Array<string>): TMonthCourse {
    if(!month) return {}

    const filtered: TMonthCourse = {}
    for(let m of Object.keys(month)) {
      if(moneyCodes.find(c => c === m)) {
        filtered[m] = month[m]
      }
    }

    return filtered
  }
}
