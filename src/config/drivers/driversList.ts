import _ from 'underscore';
import Driver from './driver';

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

module.exports = DriversList;