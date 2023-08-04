"use strict";
//-------------- Using Inheritance (is a relation) --------------
Object.defineProperty(exports, "__esModule", { value: true });
const Summary_1 = require("./composition/Summary");
const MatchReader_1 = require("./composition/MatchReader");
// ----- Read -----
// const csvFileReader = new CsvFileReader('../football.csv')
// const matchReader = new MatchReader(csvFileReader)
// matchReader.load()
// ----- After creating "static" functions -----
const matchReader = MatchReader_1.MatchReader.fromCsv('../football.csv');
matchReader.load();
// ----- Analyse -----
// const summary = new Summary(
//   new WinAnalysis('Man United'),
//   new ConsoleReport()
//   //new HtmlReport()
// )
// ----- After creating "static" functions -----
//const summary = Summary.winAnalysisWithConsoleReport('Man United')
const summary = Summary_1.Summary.winAnalysisWithHtmlReport('Man United');
// ----- Print -----
summary.buildAndPrintReport(matchReader.matches);
