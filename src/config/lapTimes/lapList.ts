import _ from 'underscore';
import Lap from './lap';

function LapList(this: any, lapsParser: any) {
    let self = this;
    this.number = lapsParser.number
    this.laps = [];

    _.map(lapsParser.Timings, function(lap) {
        self.laps.push(new Lap(lap));
    });
}

LapList.prototype.getLap = function(driverId: any) {
    return _.find(this.laps, function(lap) {
        return lap.driverId = driverId;
    });
};

module.exports = LapList;