import _ from 'underscore';
import PitStop from './pitStop';

function PitStopList(this: any, pitStopListParser: any) {
    let self = this;
    this.pitStops = [];
    _.map(pitStopListParser, function(pitStop) {
        self.pitStops.push(new PitStop(pitStop));
    });
};

PitStopList.prototype.getPitStop = function(driverId: any) {
    return _.find(this.pitStops, function(pitStop) {
        return pitStop.driverId == driverId;
    });
};

module.exports = PitStopList;