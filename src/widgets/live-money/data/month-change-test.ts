import {TMonthCourse} from "../index.types";
import {dataDollar} from "../../../shared/data/dollar-month-course";
import {euroMonthChange} from "../../../shared/data/euro-month-change";
import {poundMonthChange} from "../../../shared/data/pound-month-change";
import {japanMonthChange} from "../../../shared/data/japan-month-change";
import {turkishMonthChange} from "../../../shared/data/turkish-month-change";
import {chinaMonthChange} from "../../../shared/data/china-month-change";

export const monthChangeTest: TMonthCourse = {
  "USD": dataDollar,
  "EUR": euroMonthChange,
  "GBP": poundMonthChange,
  "TRY": turkishMonthChange,
  "JPY": japanMonthChange,
  "CNY": chinaMonthChange
}
