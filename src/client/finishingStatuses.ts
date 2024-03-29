import getRequest from "../utils/request";
import FinishingStatusList from "../../typings/finishingStatuses/finishingStatusList";
import config from "../utils/config";
import ResponsesValidator from "./responsesValidator";

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
                callback(null, new FinishingStatusList(response.data.MRData.StatusTable.Status));
                console.log(response.data.MRData.StatusTable.Status);
            }
        });
    }

    getYearFinishingStatuses(season: any, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/status.json"
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutFinishingStatuses(response)) {
                callback(new Error('Invalid season.'));
            }
            else {
                callback(null, new FinishingStatusList(response.data.MRData.StatusTable.Status));
                console.log(response.data.MRData.StatusTable.Status);
            }
        });
    }
}