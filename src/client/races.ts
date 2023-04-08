import getRequest from "../utils/request";
import Race from "../config/races/races";
import config from "../utils/config";
import ResponsesValidator from "./responsesValidator";

export default class Races {

    constructor(responsesValidator: ResponsesValidator) {
        this.responsesValidator = responsesValidator;
    }
    
    responsesValidator: ResponsesValidator;
    
    getRace(season: string, round: string, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/" + round + "on";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new Race(response["MRData"]["RaceTable"]["Races"][0]));
            }
        });
    }

    getLastRace(responsesValidator: any, callback: any) {
        let url = config.baseUrl + "current/laston";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else {
                callback(null, new Race(response["MRData"]["RaceTable"]["Races"][0]));
            }
        });
    }
}