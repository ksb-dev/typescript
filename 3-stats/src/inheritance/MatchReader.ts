import { CsvFileReader } from './CsvFileReader'
import { dateStringToDate } from '../utils'
import { MatchResult } from '../MatchResult'
import { MatchData } from '../MatchData'

export class MatchReader extends CsvFileReader<MatchData> {
  // constructor (public fileName: string) {
  //   super(fileName)
  // }

  mapRow (row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, // Type Assertion
      row[6]
    ]
  }
}
