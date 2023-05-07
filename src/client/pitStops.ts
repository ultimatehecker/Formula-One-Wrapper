import getRequest from "../utils/request";
import PitStop from "../../typings/pitStops/pitStop";
import PitStopList from "../../typings/pitStops/pitStopList";
import config from "../utils/config";
import ResponsesValidator from "./responsesValidator";

export default class PitStops {

    constructor(responsesValidator: ResponsesValidator) {
        this.responsesValidator = responsesValidator;
    }
    
    responsesValidator: ResponsesValidator;
    
    getPitStop(season: any, round: any, pitStop: any, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/" + round + "/pitstops/" + pitStop + ".json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round/pitStop.'));
            }
            else {
                callback(null, new PitStopList(response.data.MRData.RaceTable.Races[0].PitStops));
                console.log(response.data.MRData.RaceTable.Races[0].PitStops);
            }
        });
    }

    getDriverPitStops(season: any, round: any, driverId: any, pitStop: any, responsesValidator: any, callback: any)  {
        let url = config.baseUrl + season + "/" + round + "/drivers/"+ driverId + "/pitstops/" + pitStop + ".json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round/pitStop/driverId.'));
            }
            else {
                callback(null, new PitStop(response.data.MRData.RaceTable.Races[0].PitStops[0]));
                console.log(response.data.MRData.RaceTable.Races[0].PitStops[0]);
            }
        });
    }
}