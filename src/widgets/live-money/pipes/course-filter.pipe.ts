import {Pipe, PipeTransform} from "@angular/core";
import {TValute} from "../index.types";

@Pipe({
  standalone: true,
  name: 'courseFilter'
})
export class CourseFilterPipe implements PipeTransform {
  transform(course: Record<string, TValute> | undefined, moneyCharCode: Array<string>): Record<string, TValute> {
    if (!course) return {}

    const filtered: Record<string, TValute> = {}

    for (let v of Object.keys(course)) {
      if (moneyCharCode.find(c => course[v].CharCode === c))
        filtered[v] = course[v];
    }

    return filtered
  }
}
