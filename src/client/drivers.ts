import getRequest from "../utils/request";
import Driver from "../config/drivers/driver";
import DriversList from "../config/drivers/driversList";
import config from "../utils/config";
import ResponsesValidator from "./responsesValidator";

export default class Drivers {

    constructor(responsesValidator: ResponsesValidator) {
        this.responsesValidator = responsesValidator;
    }
    
    responsesValidator: ResponsesValidator;
    
    getDriver(driverId: any, responsesValidator: any, callback: any) {
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

    getDrivers(year: string, responsesValidator: any, callback: any) {
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