import getRequest from "../utils/request";
import Race from "../../typings/races/races";
import config from "../utils/config";
import ResponsesValidator from "./responsesValidator";

export default class Races {

    constructor(responsesValidator: ResponsesValidator) {
        this.responsesValidator = responsesValidator;
    }
    
    responsesValidator: ResponsesValidator;
    
    getRace(season: any, round: any, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/" + round + ".json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new Race(response.data.MRData.RaceTable.Races[0]));
                console.log(response.data.MRData.RaceTable.Races[0]);
            }
        });
    }

    getLastRace(responsesValidator: any, callback: any) {
        let url = config.baseUrl + "current/last.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else {
                callback(null, new Race(response.data.MRData.RaceTable.Races[0]))
                console.log(response.data.MRData.RaceTable.Races[0]);
            }
        });
    }
}