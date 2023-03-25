import getRequest from "../utils/request.js";
import RaceResult from "../config/raceResults/raceResults.js";
import config from "../utils/config.js";
import ResponsesValidator from "./responsesValidator.js";

export default class RaceResults {

    constructor(responsesValidator: ResponsesValidator) {
        this.responsesValidator = responsesValidator;
    }
    
    responsesValidator: ResponsesValidator;
    
    getRaceResults(season: string, round: string, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/" + round + "/results.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new RaceResult(response["MRData"]["RaceTable"]["Races"][0]["Results"]));
            }
        });
    }
}