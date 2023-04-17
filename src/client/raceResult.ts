import getRequest from "../utils/request";
import RaceResult from "../config/raceResults/raceResults";
import config from "../utils/config";
import ResponsesValidator from "./responsesValidator";

export default class RaceResults {

    constructor(responsesValidator: ResponsesValidator) {
        this.responsesValidator = responsesValidator;
    }
    
    responsesValidator: ResponsesValidator;
    
    getRaceResults(season: number, round: number, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/" + round + "/results.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new RaceResult(response.data.MRData.RaceTable.Races[0].Results));
            }
        });
    }
}