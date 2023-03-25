import _ from 'underscore';
import Circuit from './circuit.js';

/*

function CircuitsList(this: any, circuitParser: any) {
    let self = this;
    this.circuits = [];

    _.map(circuitParser, function(circuitParser) { 
        self.circuits.push(new Circuit(circuitParser)); 
    });
}

CircuitsList.prototype.getCircuit = function(id: any) {
    return _.find(this.circuits, function(circuit) { 
        return circuit.circuitId == id 
    });
};

*/

class CircuitsList {
    circuits: Circuit[];

    constructor(circuitParser: any) {
        this.circuits = [];
        _.map(circuitParser, (circuitParser: any) => {
            this.circuits.push(new Circuit(circuitParser));
        });
    }

    getCircuit(id: any) {
        return _.find(this.circuits, (circuit: any) => {
            return circuit.circuitId == id;
        });
    }
}

export default CircuitsList;
