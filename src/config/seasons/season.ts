import _ from 'underscore';
import Race from '../races/races';

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

module.exports = Season;