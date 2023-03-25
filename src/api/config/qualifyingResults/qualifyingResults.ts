import _ from 'underscore';
import DriverQualifyingResult from './driverQualifiyingResult.js';

/*

function QualifyingResults(this: any, driverQualifiyingResultsParser: any) {
    let self = this;
    this.driverQualifiyingResults = [];

    _.map(driverQualifiyingResultsParser, function(driverResult) {
        self.driverQualifiyingResultsParser.push(new DriverQualifyingResult(driverResult));
    });
};

QualifyingResults.prototype.getDriverResult = function(pos: number) {
    return _.find(this.driverQualifiyingResults, function(driverResult) {
        return driverResult.pos == pos;
    });
};

*/

class QualifyingResult {
    driverQualifiyingResults: DriverQualifyingResult[];

    constructor(driverQualifiyingResultsParser: any) {
        this.driverQualifiyingResults = [];
        _.map(driverQualifiyingResultsParser, (driverResult: any) => {
            this.driverQualifiyingResults.push(new DriverQualifyingResult(driverResult));
        });
    }

    getDriverResult(pos: number) {
        return _.find(this.driverQualifiyingResults, (driverResult: any) => {
            return driverResult.pos == pos;
        });
    }
}

export default QualifyingResult;