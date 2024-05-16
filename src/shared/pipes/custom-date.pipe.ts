import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  standalone: true,
  name: 'customDatePipe'
})
export class CustomDatePipe implements PipeTransform {

  withZero(value: number): string {
    if (value < 10) return `0${value}`

    return value.toString()
  }

  transform(value: Date): string {

    return `${this.withZero(value.getDate())}.${this.withZero(value.getMonth() + 1)}.${value.getFullYear()}, ${this.withZero(value.getHours())}:${this.withZero(value.getMinutes())}:${this.withZero(value.getSeconds())}`;
  }
}
