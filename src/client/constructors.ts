import getRequest from "../utils/request";
import Constructor from "../config/constructors/constructor";
import ConstructorsList from "../config/constructors/constructorsList";
import config from "../utils/config";
import ResponsesValidator from "./responsesValidator";

export default class Constructors {

    constructor(responsesValidator: ResponsesValidator) {
        this.responsesValidator = responsesValidator;
    }
    
    responsesValidator: ResponsesValidator;
    
    getConstructor = function( constructorId: any, responsesValidator: any, callback: any) {
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

    getConstructors = function(year: string, responsesValidator: any, callback: any) {
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