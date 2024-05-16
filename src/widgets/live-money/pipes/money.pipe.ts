import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  standalone: true,
  name: 'moneyPipe'
})
export class MoneyPipe implements PipeTransform {
  transform(value: number): number {
    return Number((1 / value).toString().substring(0, 5))
  }
}
