import getRequest from "../utils/request";
import Season from "../config/seasons/season";
import config from "../utils/config";
import ResponsesValidator from "./responsesValidator";

export default class Seasons {

    constructor(responsesValidator: ResponsesValidator) {
        this.responsesValidator = responsesValidator;
    }
    
    responsesValidator: ResponsesValidator;
    
    getSeasons(season: any, callback: any, responsesValidator: any) {
        let url = config.baseUrl + season + ".json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season.'));
            }
            else {
                callback(null, new Season(response["MRData"]["RaceTable"]["Races"]));
            }
        });
    }
}