import {Component, Input, OnInit} from "@angular/core";
import {NgIf} from "@angular/common";
import {MoneyPipe} from "../../pipes/money.pipe";

@Component({
  standalone: true,
  selector: "money",
  templateUrl: "./money.component.html",
  styleUrls: ["./money.component.scss"],
  imports: [
    MoneyPipe,
    NgIf
  ]
})
export class MoneyComponent implements OnInit {
  @Input({required: true}) moneyName: string = "";
  @Input({required: true}) moneyPrevSate: number = 0;
  @Input({required: true}) moneyCurrState: number = 0;

  constructor(private pipe: MoneyPipe) {
  }

  difference: number = 0;
  symbol: string = '';

  ngOnInit() {
    this.difference = Math.abs(this.moneyCurrState - this.moneyPrevSate)
    this.difference = Number(this.difference.toString().substring(0, 4));

    if (this.moneyCurrState > this.moneyPrevSate) {
      this.symbol = '+'
    } else if (this.moneyCurrState < this.moneyPrevSate) {
      this.symbol = '-'
    } else {
      this.symbol = ''
    }
  }
}

