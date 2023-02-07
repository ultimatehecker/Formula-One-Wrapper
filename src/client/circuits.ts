import getRequest from '../utils/request';
import Circuit from '../config/circuits/circuit';
import CircuitsList from '../config/circuits/circuitsList';
import config from '../utils/config';

export default class Circuits {
    constructor(responsesValidator: any){
        this.getCircuit = function(season: number, round: number, callback: any) {
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

        this.getCircuits = function(season: number, callback: any) {
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
}

module.exports = Circuits;