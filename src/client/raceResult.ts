import getRequest from "../utils/request";
import RaceResult from "../config/raceResults/raceResults";
import config from "../utils/config";

export default class RaceResults {
    getRaceResults(season: string, round: string, callback: any, responsesValidator: any) {
        let url = config.baseUrl + season + "/" + round + "/results.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new RaceResult(response["MRData"]["RaceTable"]["Races"][0]["Results"]));
            }
        });
    }
}