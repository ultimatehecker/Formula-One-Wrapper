import getRequest from "../utils/request";
import Constructor from "../config/constructors/constructor";
import ConstructorsList from "../config/constructors/constructorsList";
import config from "../utils/config";

export default class Constructors {
    getConstrcutor = function( constructorId: any, callback: any, responsesValidator: any) {
        let url = config.baseUrl + "constructors/" + constructorId + ".json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutConstructors(response)) {
                callback(new Error('Invalid constructor ID.'));
            }
            else {
                callback(null, new ConstructorsList(response["MRData"]["ConstructorTable"]["Constructors"][0]));
            }
        });
    }

    getConstrcutors = function(year: string, callback: any, responsesValidator: any) {
        var url = config.baseUrl + year + "/constructors.json"
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutConstructors(response)) {
                callback(new Error('Invalid year.'));
            }
            else {
                callback(null, new Constructor(response["MRData"]["ConstructorTable"]["Constructors"][0]));
            }
        });
    }
}