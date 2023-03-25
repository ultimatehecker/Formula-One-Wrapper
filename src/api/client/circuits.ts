import getRequest from '../utils/request.js';
import Circuit from '../config/circuits/circuit.js';
import CircuitsList from '../config/circuits/circuitsList.js';
import ResponsesValidator from './responsesValidator.js';
import config from '../utils/config.js';

export default class Circuits {

    constructor(responsesValidator: ResponsesValidator) {
        this.responsesValidator = responsesValidator;
    }
    
    responsesValidator: ResponsesValidator;
    
    getCircuit = function(season: number, round: number, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/" + round + "/circuits.json";
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
        let url = config.baseUrl + season + "/circuits.json";
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