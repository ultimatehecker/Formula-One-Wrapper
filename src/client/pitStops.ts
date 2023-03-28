import getRequest from "../utils/request.js";
import PitStop from "../config/pitStops/pitStop.js";
import PitStopList from "../config/pitStops/pitStopList.js";
import config from "../utils/config.js";
import ResponsesValidator from "./responsesValidator.js";

export default class PitStops {

    constructor(responsesValidator: ResponsesValidator) {
        this.responsesValidator = responsesValidator;
    }
    
    responsesValidator: ResponsesValidator;
    
    getPitStop(season: string, round: string, pitStop: any, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/" + round + "/pitstops/" + pitStop + ".json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round/pitStop.'));
            }
            else {
                callback(null, new PitStopList(response["MRData"]["RaceTable"]["Races"][0]["PitStops"]));
            }
        });
    }

    getDriverPitStops(season: string, round: string, driverId: string, pitStop: any, responsesValidator: any, callback: any)  {
        let url = config.baseUrl + season + "/" + round + "/drivers/"+ driverId + "/pitstops/" + pitStop + ".json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round/pitStop/driverId.'));
            }
            else {
                callback(null, new PitStop(response["MRData"]["RaceTable"]["Races"][0]["PitStops"][0]));
            }
        });
    }
}