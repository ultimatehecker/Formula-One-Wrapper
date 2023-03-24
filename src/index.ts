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

function ErgastClient() {
    let ResponsesValidator = new ResponsesValidator();
    let seasons = new Seasons(responsesValidator);
    let races = new Races(responsesValidator);
    let raceResults = new RaceResults(responsesValidator);
    let qualifyingResults = new QualifyingResults(responsesValidator);
    let standings = new Standings(responsesValidator);
    let drivers = new Drivers(responsesValidator);
    let constructors = new Constructors(responsesValidator);
    let circuits = new Circuits(responsesValidator);
    let finishingStatuses = new FinishingStatuses(responsesValidator);
    let lapTimes = new LapTimes(responsesValidator);
    let pitStops = new PitStops(responsesValidator);
}