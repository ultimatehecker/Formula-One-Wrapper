import getRequest from "../utils/request.js";
import QualifyingResult from "../config/qualifyingResults/qualifyingResults.js";
import config from "../utils/config.js";
import ResponsesValidator from "./responsesValidator.js";

export default class QualifyingResults {

    constructor(responsesValidator: ResponsesValidator) {
        this.responsesValidator = responsesValidator;
    }
    
    responsesValidator: ResponsesValidator;
    
    getQualifyingResults(season: string, round: string, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/" + round + "/qualifying.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new QualifyingResult(response["MRData"]["RaceTable"]["Races"][0]["QualifyingResults"]));
            }
        });
    }
}