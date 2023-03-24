import getRequest from "../utils/request";
import QualifyingResult from "../config/qualifyingResults/qualifyingResults";
import config from "../utils/config";

export default class QualifyingResults {
    getQualifyingResults(season: string, round: string, callback: any, responsesValidator: any) {
        let url = config.baseUrl + season + "/" + round + "/qualifying.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new QualifyingResult(response["MRData"]["RaceTable"]["Races"][0]["QualifyingResults"]));
            }
        });
    }
}