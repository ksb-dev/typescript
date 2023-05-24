//-------------- Using Inheritance (is a relation) --------------

// import { MatchReader } from './inheritance/MatchReader'
// import { MatchResult } from './MatchResult'

// const matchReader = new MatchReader('../football.csv')
// matchReader.read()

// let manUnitedWins = 0

// for (let match of matchReader.data) {
//   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++
//   } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++
//   }
// }

// -------------- Using Interface (Composition / has a relation) --------------

// import { CsvFileReader } from './composition/CsvFileReader'
// import { MatchReader } from './composition/MatchReader'
// import { MatchResult } from './MatchResult'

// const csvFileReader = new CsvFileReader('../football.csv')

// const matchReader = new MatchReader(csvFileReader)
// matchReader.load()

// let manUnitedWins = 0

// for (let match of matchReader.matches) {
//   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++
//   } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++
//   }
// }

// console.log(manUnitedWins)

// ---------------------------------------------------------

import { CsvFileReader } from './composition/CsvFileReader'
import { WinAnalysis } from './composition/analyzers/WinAnalysis'
import { ConsoleReport } from './composition/reports/ConsoleReport'
import { HtmlReport } from './composition/reports/HtmlReport'
import { Summary } from './composition/Summary'
import { MatchReader } from './composition/MatchReader'

// ----- Read -----

// const csvFileReader = new CsvFileReader('../football.csv')
// const matchReader = new MatchReader(csvFileReader)
// matchReader.load()

// ----- After creating "static" functions -----

const matchReader = MatchReader.fromCsv('../football.csv')
matchReader.load()

// ----- Analyse -----

// const summary = new Summary(
//   new WinAnalysis('Man United'),
//   new ConsoleReport()
//   //new HtmlReport()
// )

// ----- After creating "static" functions -----

//const summary = Summary.winAnalysisWithConsoleReport('Man United')
const summary = Summary.winAnalysisWithHtmlReport('Man United')

// ----- Print -----

summary.buildAndPrintReport(matchReader.matches)
