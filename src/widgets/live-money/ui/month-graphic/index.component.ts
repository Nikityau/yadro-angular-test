import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from "@angular/core";
import {Chart, ChartItem} from "chart.js/auto";
import {TMonthCourse} from "../../index.types";
import {ChartPipe} from "../../pipes/chart.pipe";

@Component({
  standalone: true,
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  selector: 'month-graphic'
})
export class MonthGraphicComponent implements OnInit, OnChanges, OnDestroy {

  @Input({required: true}) monthCourse: TMonthCourse | null = {};
  @Input({required: true}) moneyCharCodes: Array<string> = [];


  constructor(private pipe: ChartPipe) {
  }

  chart: Chart | null = null

  ngOnInit() {
    this.chartCreate()
  }

  ngOnChanges(changes: SimpleChanges) {
    this.chartCreate()
  }

  ngOnDestroy() {
    this.chart?.destroy()
  }

  chartCreate() {
    const el = document.querySelector('#acquisitions')
    if (!el) return

    if (this.chart) {
      this.chart.destroy()
    }

    const data = this.pipe.transform(this.monthCourse, this.moneyCharCodes)

    const dataset: Array<{
      label: string,
      data: Array<number>
    }> = []

    for (let m of Object.keys(data)) {
      const ds: {
        label: string,
        data: Array<number>,
      } = {
        label: m,
        data: [],
      }

      for (let value of data[m].ValCurs.Record) {
        ds.data.push(Number(value['Value'].replace(',', '.')))
      }

      dataset.push(ds)
    }

    this.chart = new Chart(el as ChartItem, {
      type: 'line',
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Изменение валюты за месяц'
          }
        }
      },
      data: {
        labels: Array.from({length: new Date(2024, 4, 0).getDate() || 0}). map((v, i) => i),
        datasets: dataset
      }
    });
  }
}
