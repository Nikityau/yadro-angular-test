import axios from "axios";
import {Injectable} from "@angular/core";
import {TApiRes, TMonthCourse} from "./index.types";
import {environments} from "../../environments/environment";
import {courseList} from "./data/course-list-test";
import {monthChangeTest} from "./data/month-change-test";


@Injectable()
export class LiveMoneyService {
  async getCourseList(): Promise<TApiRes | null> {
    try {
      //const {data} = await axios.get<TApiRes>(environments.API_URL)

      const test = courseList

      return test
    } catch (e) {
      return null
    }
  }

  async getMonthCourseChange(): Promise<TMonthCourse | null> {
    //const {data} = await axios.get('https://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=02/03/2001&date_req2=14/03/2001&VAL_NM_RQ=R01235')

    const test: TMonthCourse = monthChangeTest
    console.log(test)

    return test
  }
}
