import getRequest from "../utils/request.js";
import FinishingStatusList from "../config/finishingStatuses/finishingStatusList.js";
import config from "../utils/config.js";
import ResponsesValidator from "./responsesValidator.js";

export default class FinishingStatuses {

    constructor(responsesValidator: ResponsesValidator) {
        this.responsesValidator = responsesValidator;
    }
    
    responsesValidator: ResponsesValidator;
    
    getFinishingStatuses(season: any, round: any, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/" + round + "/status.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutFinishingStatuses(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new FinishingStatusList(response["MRData"]["StatusTable"]["Status"]));
            }
        });
    }

    getYearFinishingStatuses(season: string, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/status.json"
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutFinishingStatuses(response)) {
                callback(new Error('Invalid season.'));
            }
            else {
                callback(null, new FinishingStatusList(response["MRData"]["StatusTable"]["Status"]));
            }
        });
    }
}