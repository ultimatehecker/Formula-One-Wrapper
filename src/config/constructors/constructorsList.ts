import _ from 'underscore';
import Constructor from './constructor';

/*

function ConstructorsList(this: any, constructorsParser: any) {
    let self = this;
    this.constructors = [];

    _.map(constructorsParser, function(constructorsParser) {
        self.constructors.push(new Constructor(constructorsParser));
    });
}

ConstructorsList.prototype.getConstructor = function(id: any) {
    return _.find(this.constructors, function(constructor) { 
        return constructor.constructorId == id 
    });
};

*/

class ConstructorsList {
    constructors: Constructor[];
    
    constructor(constructorsParser: any) {
        this.constructors = [];
        _.map(constructorsParser, (constructorsParser: any) => {
            this.constructors.push(new Constructor(constructorsParser));
        });
    }

    getConstructor(id: any) {
        return _.find(this.constructors, (constructor: any) => {
            return constructor.constructorId == id;
        });
    }
}

module.exports = ConstructorsList;