import {Component, Input} from "@angular/core";
import {NgForOf} from "@angular/common";
import {TCourseMoney} from "../../index.types";
import {MoneyComponent} from "../money/money.component";
import {CourseFilterPipe} from "../../pipes/course-filter.pipe";


@Component({
  standalone: true,
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  selector: 'money-list',
  imports: [
    MoneyComponent,
    NgForOf,
    CourseFilterPipe
  ]
})
export class MoneyListComponent {
  @Input({required: true}) course: TCourseMoney | null = null;
  @Input({required: true}) moneyCodes: Array<string> = [];

  protected readonly Object = Object;
}
