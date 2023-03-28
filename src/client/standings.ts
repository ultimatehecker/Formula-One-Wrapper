import getRequest from "../utils/request.js";
import DriversStandings from "../config/standings/driversStandings.js";
import ConstructorsStandings from "../config/standings/constructionStandings.js";
import config from "../utils/config.js";
import ResponsesValidator from "./responsesValidator.js";

export default class Standings {

    constructor(responsesValidator: ResponsesValidator) {
        this.responsesValidator = responsesValidator;
    }
    
    responsesValidator: ResponsesValidator;
    
    getDriverStandings(season: string, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/driverStandings.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season.'));
            }
            else {
                callback(null, new DriversStandings(response["MRData"]["StandingsTable"]["StandingsLists"][0]["DriverStandings"]));
            }
        });
    }

    getDriverStandingAfterRound(season: string, round: string, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/" + round + "/driverStandings.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new DriversStandings(response["MRData"]["StandingsTable"]["StandingsLists"][0]["DriverStandings"]));
            }
        });
    }

    getConstructorStandings(season: string, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/constructorStandings.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season.'));
            }
            else {
                callback(null, new ConstructorsStandings(response["MRData"]["StandingsTable"]["StandingsLists"][0]["ConstructorStandings"]));
            }
        });
    }

    getConstructorStandingAfterRound(season: string, round: string, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/" + round + "/constructorStandings.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new ConstructorsStandings(response["MRData"]["StandingsTable"]["StandingsLists"][0]["ConstructorStandings"]));
            }
        });
    }
}