import _ from 'underscore';
import PitStop from './pitStop';

/*

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

*/

class PitStopList {
    pitStops: PitStop[];

    constructor(pitStopListParser: any) {
        this.pitStops = [];
        _.map(pitStopListParser, (pitStop: any) => {
            this.pitStops.push(new PitStop(pitStop));
        });
    }

    getPitStop(driverId: any) {
        return _.find(this.pitStops, (pitStop: any) => {
            return pitStop.driverId == driverId;
        });
    }
}

export default PitStopList;