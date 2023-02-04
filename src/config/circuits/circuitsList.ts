import _ from 'underscore';
import Circuit from './circuit';

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

module.exports = CircuitsList;