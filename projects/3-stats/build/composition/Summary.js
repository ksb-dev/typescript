"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinAnalysis_1 = require("./analyzers/WinAnalysis");
const ConsoleReport_1 = require("./reports/ConsoleReport");
const HtmlReport_1 = require("./reports/HtmlReport");
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static winAnalysisWithHtmlReport(team) {
        return new Summary(new WinAnalysis_1.WinAnalysis(team), new HtmlReport_1.HtmlReport());
    }
    static winAnalysisWithConsoleReport(team) {
        return new Summary(new WinAnalysis_1.WinAnalysis(team), new ConsoleReport_1.ConsoleReport());
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
