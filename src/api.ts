import Drivers from "./client/drivers";
import Constructors from "./client/constructors";
import Races from "./client/races";
import Seasons from "./client/seasons";
import RaceResults from "./client/raceResult";
import QualifyingResults from "./client/qualifyingResults";
import Standings from "./client/standings";
import Circuits from "./client/circuits";
import FinishingStatuses from "./client/finishingStatuses";
import LapTimes from "./client/lapTimes";
import PitStops from "./client/pitStops";
import ResponsesValidator from "./client/responsesValidator";

export default class F1Client {
    constructor() {
        this.responsesValidator = new ResponsesValidator();
        this.seasons = new Seasons(this.responsesValidator);
        this.races = new Races(this.responsesValidator);
        this.raceResults = new RaceResults(this.responsesValidator);
        this.qualifyingResults = new QualifyingResults(this.responsesValidator);
        this.standings = new Standings(this.responsesValidator);
        this.drivers = new Drivers(this.responsesValidator);
        this.constructors = new Constructors(this.responsesValidator);
        this.circuits = new Circuits(this.responsesValidator);
        this.finishingStatuses = new FinishingStatuses(this.responsesValidator);
        this.lapTimes = new LapTimes(this.responsesValidator);
        this.pitStops = new PitStops(this.responsesValidator);
    }

    responsesValidator: ResponsesValidator
    seasons: Seasons
    races: Races
    raceResults: RaceResults
    qualifyingResults: QualifyingResults
    standings: Standings
    drivers: Drivers
    constructors: Constructors
    circuits: Circuits
    finishingStatuses: FinishingStatuses
    lapTimes: LapTimes
    pitStops: PitStops

    getSeason(year: any, callback: any) {
        this.seasons.getSeason(year, this.responsesValidator, function(err: any, season: any) {
            callback(err, season);
        });
    }

    getRace(season: any, round: any, callback: any) {
        this.races.getRace(season, round, this.responsesValidator, function(err: any, race: any) {
            callback(err, race);
        });
    }

    getLastRace(callback: any) {
        this.races.getLastRace(this.responsesValidator, function(err: any, race: any) {
            callback(err, race)
        });
    }

    getRaceResults(season: any, round: any, callback: any) {
        this.raceResults.getRaceResults(season, round, this.responsesValidator, function(err: any, raceResults: any) {
            callback(err, raceResults);
        });
    }

    getQualifyingResults(season: any, round: any, callback: any) {
        this.qualifyingResults.getQualifyingResults(season, round, this.responsesValidator, function(err: any, qualifyingResults: any) {
            callback(err, qualifyingResults);
        });
    }

    getDriverStandings(season: any, callback: any) {
        this.standings.getDriverStandings(season, this.responsesValidator, function(err: any, driverStandings: any) {
            callback(err, driverStandings);
        });
    }

    getDriverStandingAfterRound(season: any, round: any, callback: any) {
        this.standings.getDriverStandingAfterRound(season, round, this.responsesValidator, function(err: any, driverStandings: any) {
            callback(err, driverStandings);
        });
    }

    getConstructorStandings(season: any, callback: any) {
        this.standings.getConstructorStandings(season, this.responsesValidator, function(err: any, constructorStandings: any) {
            callback(err, constructorStandings);
        });
    }

    getConstructorStandingAfterRound(season: any, round: any, callback: any) {
        this.standings.getConstructorStandingAfterRound(season, round, this.responsesValidator, function(err: any, constructorStandings: any) {
            callback(err, constructorStandings);
        });
    }

    getDriver(driverId: any, callback: any) {
        this.drivers.getDriver(driverId, this.responsesValidator, function(err: any, driver: any) {
            callback(err, driver);
        });
    }

    getDrivers(year: any, callback: any) {
        this.drivers.getDrivers(year, this.responsesValidator, function(err: any, drivers: any) {
            callback(err, drivers);
        });
    }

    getConstructor(constructorId: any, callback: any) {
        this.constructors.getConstructor(constructorId, this.responsesValidator, function(err: any, constructor: any) {
            callback(err, constructor);
        });
    }

    getConstructors(year: any, callback: any) {
        this.constructors.getConstructors(year, this.responsesValidator, function(err: any, constructors: any) {
            callback(err, constructors);
        });
    }

    getCircuit(circuitId: any, round: any, callback: any) {
        this.circuits.getCircuit(circuitId, round, this.responsesValidator, function(err: any, circuit: any) {
            callback(err, circuit);
        });
    }

    getCircuits(year: any, callback: any) {
        this.circuits.getCircuits(year, this.responsesValidator, function(err: any, circuits: any) {
            callback(err, circuits);
        });
    }

    getFinishingStatuses(season: any, round: any, callback: any) {
        this.finishingStatuses.getFinishingStatuses(season, round, this.responsesValidator, function(err: any, finishingStatuses: any) {
            callback(err, finishingStatuses);
        });
    }

    getYearFinishingStatuses(season: any, callback: any) {
        this.finishingStatuses.getYearFinishingStatuses(season, this.responsesValidator, function(err: any, finishingStatuses: any) {
            callback(err, finishingStatuses);
        });
    }

    getLap(season: any, round: any, lapany: any, callback: any) {
        this.lapTimes.getLap(season, round, lapany, this.responsesValidator, function(err: any, lap: any) {
            callback(err, lap);
        });
    }

    getLaps(season: any, round: any, callback: any) {
        this.lapTimes.getLaps(season, round, this.responsesValidator, function(err: any, laps: any) {
            callback(err, laps);
        });
    }

    getPitStop(season: any, round: any, pitStopany: any, callback: any) {
        this.pitStops.getPitStop(season, round, pitStopany, this.responsesValidator, function(err: any, pitStop: any) {
            callback(err, pitStop);
        });
    }

    getDriverPitStops(season: any, round: any, driverId: any, pitStopany: any,  callback: any) {
        this.pitStops.getDriverPitStops(season, round, driverId, pitStopany, this.responsesValidator, function(err: any, pitStops: any) {
            callback(err, pitStops);
        });
    }
}