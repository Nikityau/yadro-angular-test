import {Component, DoCheck, OnInit} from "@angular/core";
import {NgForOf, NgIf} from "@angular/common";
import {produce} from "immer";
import {TCourseMoney, TMonthCourse} from "./index.types";
import {CustomDatePipe} from "../../shared/pipes/custom-date.pipe";
import {MoneyComponent} from "./ui/money/money.component";
import {LiveMoneyService} from "./live-money.service";
import {CharCodesModal} from "./ui/money-code-modal/index.component";
import {MonthGraphicComponent} from "./ui/month-graphic/index.component";
import {MoneyListComponent} from "./ui/money-list/index.components";

@Component({
  selector: "live-money",
  standalone: true,
  templateUrl: './live-money.component.html',
  imports: [
    CustomDatePipe,
    MoneyComponent,
    NgForOf,
    CharCodesModal,
    NgIf,
    MonthGraphicComponent,
    MoneyListComponent,
  ],
  styleUrls: ['./live-money.component.scss']
})
export class LiveMoneyComponent implements OnInit, DoCheck {
  courseMoney: TCourseMoney = {
    date: new Date(),
    course: null
  };
  monthCourse: TMonthCourse | null = null;
  moneyCharCodes: Array<string> = ['USD', 'EUR', 'GBP'];
  isModalOpen = false;

  constructor(private moneyService: LiveMoneyService) {
  }

  onAddMoneyCode(code: string) {
    if (this.moneyCharCodes.find(c => c === code)) {
      this.moneyCharCodes = produce(this.moneyCharCodes, draft => {
        draft = draft.filter(f => f !== code)

        return draft
      })
    } else {
      this.moneyCharCodes = produce(this.moneyCharCodes, draft => {
        draft.push(code)

        return draft
      })
    }

    localStorage.setItem('codes', JSON.stringify(this.moneyCharCodes))
  }

  ngOnInit() {
    this.reqForCourse()
    this.reqMonthCourse()
    /*
    this.reqMonthChange()*/
    /*setInterval(() => {
      this.reqForCourse()
    }, 5000)*/

    const codes: any | null = localStorage.getItem('codes')
    if (codes === null) return

    this.moneyCharCodes = JSON.parse(codes);
  }


  ngDoCheck() {
    console.log('check')
  }

  reqForCourse() {
    this.moneyService.getCourseList()
      .then(data => {
        if (data === null) return

        this.courseMoney = {
          date: new Date(),
          course: data,
        }
      })
      .catch(e => {
        console.log(e)
      })
  }

  reqMonthCourse() {
    this.moneyService.getMonthCourseChange()
      .then(data => {
        if (data === null) return

        this.monthCourse = data;
      })
  }
}
