import getRequest from '../utils/request';
import Circuit from '../config/circuits/circuit';
import CircuitsList from '../config/circuits/circuitsList';
import ResponsesValidator from './responsesValidator';
import config from '../utils/config';

export default class Circuits {

    constructor(responsesValidator: ResponsesValidator) {
        this.responsesValidator = responsesValidator;
    }
    
    responsesValidator: ResponsesValidator;
    
    getCircuit = function(season: number, round: number, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/" + round + "/circuitson";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutCircuits(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new Circuit(response["MRData"]["CircuitTable"]["Circuits"][0]));
            }
        });
    };

    getCircuits = function(season: number, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/circuitson";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutCircuits(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new CircuitsList(response["MRData"]["CircuitTable"]["Circuits"]));
            }
        });
    };
}