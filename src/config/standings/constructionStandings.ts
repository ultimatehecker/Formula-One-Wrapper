import _ from "underscore";
import ConstructorStanding from "./constructorStanding";

/*

function ConstructorsStandings(this: any, constructorsStandingsParser: any) {
    let self = this;
    this.standings = [];
    _.map(constructorsStandingsParser, function(standing) {
        self.standings.push(new ConstructorStanding(standing));
    });
};

ConstructorsStandings.prototype.getConstructorStanding = function(pos: any) {
    return _.find(this.standings, function(standing) {
        return standing.pos == pos;
    });
};

*/

class ConstructorsStandings {
    standings: ConstructorStanding[];

    constructor(constructorsStandingsParser: any) {
        this.standings = [];
        _.map(constructorsStandingsParser, (standing: any) => {
            this.standings.push(new ConstructorStanding(standing));
        });
    }

    getConstructorStanding(pos: number) {
        return _.find(this.standings, (standing: any) => {
            return standing.pos == pos;
        });
    }
}

export default ConstructorsStandings;