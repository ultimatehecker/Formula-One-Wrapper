import _ from 'underscore';
import DriverRaceResult from './driverRaceResult';

/*

function RaceResults(this: any, driverResultsParser: any) {
    let self = this;
    this.driverResults = [];

    _.map(driverResultsParser, function(driverResult) {
        self.driverResultsParser.push(new DriverRaceResult(driverResult));
    });
};

RaceResults.prototype.getDriverResult = function(pos: number) {
    return _.find(this.driverResults, function(driverResult) {
        return driverResult.pos == pos;
    });
};

*/

class RaceResults {
    driverResults: DriverRaceResult[];

    constructor(driverResultsParser: any) {
        this.driverResults = [];
        _.map(driverResultsParser, (driverResult: any) => {
            this.driverResults.push(new DriverRaceResult(driverResult));
        });
    }

    getDriverResult(pos: number) {
        return _.find(this.driverResults, (driverResult: any) => {
            return driverResult.pos == pos;
        });
    }
}

module.exports = RaceResults;