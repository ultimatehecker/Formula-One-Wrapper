import getRequest from "../utils/request";
import FinishingStatusList from "../config/finishingStatuses/finishingStatusList";
import config from "../utils/config";
import ResponsesValidator from "./responsesValidator";

export default class FinishingStatuses {

    constructor(responsesValidator: ResponsesValidator) {
        this.responsesValidator = responsesValidator;
    }
    
    responsesValidator: ResponsesValidator;
    
    getFinishingStatuses(season: any, round: any, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/" + round + "/statuson";
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
        let url = config.baseUrl + season + "/statuson"
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