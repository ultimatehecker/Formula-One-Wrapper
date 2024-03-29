import getRequest from "../utils/request";
import DriversStandings from "../../typings/standings/driversStandings";
import ConstructorsStandings from "../../typings/standings/constructionStandings";
import config from "../utils/config";
import ResponsesValidator from "./responsesValidator";

export default class Standings {

    constructor(responsesValidator: ResponsesValidator) {
        this.responsesValidator = responsesValidator;
    }
    
    responsesValidator: ResponsesValidator;
    
    getDriverStandings(season: any, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/driverStandings.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season.'));
            }
            else {
                callback(null, new DriversStandings(response.data.MRData.StandingsTable.StandingsLists[0].DriversStandings));
                console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriversStandings);
            }
        });
    }

    getDriverStandingAfterRound(season: any, round: any, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/" + round + "/driverStandings.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new DriversStandings(response.data.MRData.StandingsTable.StandingsLists[0].DriversStandings));
                console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriversStandings);
            }
        });
    }

    getConstructorStandings(season: any, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/constructorStandings.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season.'));
            }
            else {
                callback(null, new ConstructorsStandings(response.data.MRData.StandingsTable.StandingsLists[0].ConstructorsStandings));
                console.log(response.data.MRData.StandingsTable.StandingsLists[0].ConstructorsStandings);
            }
        });
    }

    getConstructorStandingAfterRound(season: any, round: any, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/" + round + "/constructorStandings.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutRaces(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new ConstructorsStandings(response.data.MRData.StandingsTable.StandingsLists[0].ConstructorsStandings));
                console.log(response.data.MRData.StandingsTable.StandingsLists[0].ConstructorsStandings);
            }
        });
    }
}