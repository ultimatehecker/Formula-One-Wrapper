import _ from 'underscore';
import Driver from './driver.js';

/*

function DriversList(this: any, driversParser: any) {
    let self = this;
    this.drivers = [];

    _.map(driversParser, function(driversParser) {
        self.drivers.push(new Driver(driversParser));
    });
}

DriversList.prototype.getDriver = function(code: any) {
    return _.find(this.drivers, function(driver) {
        return driver.code == code;
    });
};

*/

class DriversList {
    drivers: Driver[];
    
    constructor(driversParser: any) {
        this.drivers = [];
        _.map(driversParser, (driversParser: any) => {
            this.drivers.push(new Driver(driversParser));
        });
    }

    getDriver(code: any) {
        return _.find(this.drivers, (driver: any) => {
            return driver.code == code;
        });
    }
}

export default DriversList;