import { MatchData } from '../MatchData'
import { WinAnalysis } from './analyzers/WinAnalysis'
import { ConsoleReport } from './reports/ConsoleReport'
import { HtmlReport } from './reports/HtmlReport'

export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  constructor (public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  static winAnalysisWithHtmlReport (team: string): Summary {
    return new Summary(new WinAnalysis(team), new HtmlReport())
  }

  static winAnalysisWithConsoleReport (team: string): Summary {
    return new Summary(new WinAnalysis(team), new ConsoleReport())
  }

  buildAndPrintReport (matches: MatchData[]): void {
    const output = this.analyzer.run(matches)
    this.outputTarget.print(output)
  }
}
