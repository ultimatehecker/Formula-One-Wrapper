import getRequest from "../utils/request";
import FinishingStatusList from "../config/finishingStatuses/finishingStatusList";
import config from "../utils/config";

export default class FinishingStatuses {
    getFinishingStatuses(season: any, round: any, callback: any, responsesValidator: any) {
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

    getYearFinishingStatuses(season: string, callback: any, responsesValidator: any) {
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