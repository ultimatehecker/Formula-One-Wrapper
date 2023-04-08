import _ from "underscore";
import DriverStanding from "./driverStanding";

/*

function DriversStandings(this: any, driversStandingsParser: any) {
    let self = this;
    this.standings = [];

    _.map(driversStandingsParser, function(standing) {
        self.standings.push(new DriverStanding(standing));
    });
};

DriversStandings.prototype.getDriverStanding = function(pos: any) {
    return _.find(this.standings, function(standing) {
        return standing.pos == pos;
    });
};

*/

class DriversStandings {
    standings: DriverStanding[];

    constructor(driversStandingsParser: any) {
        this.standings = [];
        _.map(driversStandingsParser, (standing: any) => {
            this.standings.push(new DriverStanding(standing));
        });
    }

    getDriverStanding(pos: number) {
        return _.find(this.standings, (standing: any) => {
            return standing.pos == pos;
        });
    }
}

export default DriversStandings;