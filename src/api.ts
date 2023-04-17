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

    getSeason(year: number, callback: any) {
        this.seasons.getSeason(year, this.responsesValidator, function(err: any, season: any) {
            callback(err, season);
        });

        console.log("Successfully invoked methord getSeason");
    }

    getRace(season: number, round: number, callback: any) {
        this.races.getRace(season, round, this.responsesValidator, function(err: any, race: any) {
            callback(err, race);
        });

        console.log("Successfully invoked methord getRace");
    }

    getLastRace(callback: any) {
        this.races.getLastRace(this.responsesValidator, function(err: any, race: any) {
            callback(err, race)
        });

        console.log("Successfully invoked methord getLastRace");
    }

    getRaceResults(season: number, round: number, callback: any) {
        this.raceResults.getRaceResults(season, round, this.responsesValidator, function(err: any, raceResults: any) {
            callback(err, raceResults);
        });

        console.log("Successfully invoked methord getRaceResults");
    }

    getQualifyingResults(season: number, round: number, callback: any) {
        this.qualifyingResults.getQualifyingResults(season, round, this.responsesValidator, function(err: any, qualifyingResults: any) {
            callback(err, qualifyingResults);
        });

        console.log("Successfully invoked methord getQualifyingResults");
    }

    getDriverStandings(season: number, callback: any) {
        this.standings.getDriverStandings(season, this.responsesValidator, function(err: any, driverStandings: any) {
            callback(err, driverStandings);
        });

        console.log("Successfully invoked methord getDriverStandings");
    }

    getDriverStandingAfterRound(season: number, round: number, callback: any) {
        this.standings.getDriverStandingAfterRound(season, round, this.responsesValidator, function(err: any, driverStandings: any) {
            callback(err, driverStandings);
        });

        console.log("Successfully invoked methord getDriverStandingAfterRound");
    }

    getConstructorStandings(season: number, callback: any) {
        this.standings.getConstructorStandings(season, this.responsesValidator, function(err: any, constructorStandings: any) {
            callback(err, constructorStandings);
        });

        console.log("Successfully invoked methord getConstructorStandings");
    }

    getConstructorStandingAfterRound(season: number, round: number, callback: any) {
        this.standings.getConstructorStandingAfterRound(season, round, this.responsesValidator, function(err: any, constructorStandings: any) {
            callback(err, constructorStandings);
        });

        console.log("Successfully invoked methord getConstructorStandingAfterRound");
    }

    getDriver(driverId: string, callback: any) {
        this.drivers.getDriver(driverId, this.responsesValidator, function(err: any, driver: any) {
            callback(err, driver);
        });

        console.log("Successfully invoked methord getDriver");
    }

    getDrivers(year: string, callback: any) {
        this.drivers.getDrivers(year, this.responsesValidator, function(err: any, drivers: any) {
            callback(err, drivers);
        });

        console.log("Successfully invoked methord getDrivers");
    }

    getConstructor(constructorId: string, callback: any) {
        this.constructors.getConstructor(constructorId, this.responsesValidator, function(err: any, constructor: any) {
            callback(err, constructor);
        });

        console.log("Successfully invoked methord getConstructor");
    }

    getConstructors(year: string, callback: any) {
        this.constructors.getConstructors(year, this.responsesValidator, function(err: any, constructors: any) {
            callback(err, constructors);
        });

        console.log("Successfully invoked methord getConstructors");
    }

    getCircuit(circuitId: number, round: number, callback: any) {
        this.circuits.getCircuit(circuitId, round, this.responsesValidator, function(err: any, circuit: any) {
            callback(err, circuit);
        });

        console.log("Successfully invoked methord getCircuit");
    }

    getCircuits(year: number, callback: any) {
        this.circuits.getCircuits(year, this.responsesValidator, function(err: any, circuits: any) {
            callback(err, circuits);
        });

        console.log("Successfully invoked methord getCircuits");
    }

    getFinishingStatuses(season: number, round: number, callback: any) {
        this.finishingStatuses.getFinishingStatuses(season, round, this.responsesValidator, function(err: any, finishingStatuses: any) {
            callback(err, finishingStatuses);
        });

        console.log("Successfully invoked methord getFinishingStatuses");
    }

    getYearFinishingStatuses(season: number, callback: any) {
        this.finishingStatuses.getYearFinishingStatuses(season, this.responsesValidator, function(err: any, finishingStatuses: any) {
            callback(err, finishingStatuses);
        });

        console.log("Successfully invoked methord getYearFinishingStatuses");
    }

    getLap(season: number, round: number, lapNumber: number, callback: any) {
        this.lapTimes.getLap(season, round, lapNumber, this.responsesValidator, function(err: any, lap: any) {
            callback(err, lap);
        });

        console.log("Successfully invoked methord getLap");
    }

    getLaps(season: number, round: number, callback: any) {
        this.lapTimes.getLaps(season, round, this.responsesValidator, function(err: any, laps: any) {
            callback(err, laps);
        });

        console.log("Successfully invoked methord getLaps");
    }

    getPitStop(season: number, round: number, pitStopNumber: number, callback: any) {
        this.pitStops.getPitStop(season, round, pitStopNumber, this.responsesValidator, function(err: any, pitStop: any) {
            callback(err, pitStop);
        });

        console.log("Successfully invoked methord getPitStop");
    }

    getDriverPitStops(season: number, round: number, driverId: string, pitStopNumber: number,  callback: any) {
        this.pitStops.getDriverPitStops(season, round, driverId, pitStopNumber, this.responsesValidator, function(err: any, pitStops: any) {
            callback(err, pitStops);
        });

        console.log("Successfully invoked methord getDriverPitStops");
    }
}