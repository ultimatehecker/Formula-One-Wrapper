import getRequest from "../utils/request.js";
import Season from "../config/seasons/season.js";
import config from "../utils/config.js";
import ResponsesValidator from "./responsesValidator.js";

export default class Seasons {

    constructor(responsesValidator: ResponsesValidator) {
        this.responsesValidator = responsesValidator;
    }
    
    responsesValidator: ResponsesValidator;
    
    getSeason(season: any, responsesValidator: any, callback: any) {
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