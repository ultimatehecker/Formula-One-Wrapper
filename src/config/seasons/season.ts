import _ from 'underscore';
import Race from '../races/races';

/*

function Season(this: any,seasonParser: any) {
    let self = this;
    this.races = [];

    _.map(seasonParser, function(seasonRace) {
        self.races.push(new Race(seasonRace));
    });
};

Season.prototype.getRace = function(round: any) {
    return _.find(this.races, function(race) {
        return race.round == round;
    });
};

*/

class Season {
    raceResult: Race[];

    constructor(driverResultsParser: any) {
        this.raceResult = [];
        _.map(driverResultsParser, (driverResult: any) => {
            this.raceResult.push(new Race(driverResult));
        });
    }

    getRace(round: number) {
        return _.find(this.raceResult, (raceResult: any) => {
            return raceResult.round == round;
        });
    }
}

export default Season;