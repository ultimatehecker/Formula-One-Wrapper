import getRequest from '../utils/request';
import Circuit from '../../typings/circuits/circuit';
import CircuitsList from '../../typings/circuits/circuitsList';
import ResponsesValidator from './responsesValidator';
import config from '../utils/config';

export default class Circuits {

    constructor(responsesValidator: ResponsesValidator) {
        this.responsesValidator = responsesValidator;
    }
    
    responsesValidator: ResponsesValidator;
    
    getCircuit = function(season: any, round: any, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/" + round + "/circuits.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutCircuits(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new Circuit(response.data.MRData.CircuitTable.Circuits[0]));
                console.log(response.data.MRData.CircuitTable.Circuits[0]);
            }
        });
    };

    getCircuits = function(season: any, responsesValidator: any, callback: any) {
        let url = config.baseUrl + season + "/circuit.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutCircuits(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new CircuitsList(response.data.MRData.CircuitTable.Circuits));
                console.log(response.data.MRData.CircuitTable.Circuits);
            }
        });
    };
}