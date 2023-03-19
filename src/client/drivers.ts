import getRequest from "../utils/request";
import Driver from "../config/drivers/driver";
import DriversList from "../config/drivers/driversList";
import config from "../utils/config";

export default class Drivers {
    getDriver(driverId: any, callback: any, responsesValidator: any) {
        let url = config.baseUrl + "drivers/" + driverId + ".json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutDrivers(response)) {
                callback(new Error('Invalid driver ID.'));
            }
            else {
                callback(null, new Driver(response["MRData"]["DriverTable"]["Drivers"][0]));
            }
        });
    }

    getDrivers(year: string, callback: any, responsesValidator: any) {
        var url = config.baseUrl + year + "/drivers.json"
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutDrivers(response)) {
                callback(new Error('Invalid year.'));
            }
            else {
                callback(null, new DriversList(response["MRData"]["DriverTable"]["Drivers"]));
            }
        });
    }
}