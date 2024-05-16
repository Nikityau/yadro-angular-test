export interface TCourseMoney {
  date: Date
  course: TApiRes | null
}

export interface TApiRes {
  "Date": string,
  "PreviousDate": string,
  "Timestamp": string,
  "Valute": Record<string, TValute>,
}

export interface TValute {
  "ID": string,
  "CharCode": string,
  "Value": number,
  "Previous": number
}

export interface TMonth {
  ValCurs: {
    _ID: string,
    _DateRange1: string,
    _DateRange2: string,
    Record: Array<{
      "Value": string
      _Date: string
    }>
  }
}

export type TMonthCourse = Record<string, TMonth>
