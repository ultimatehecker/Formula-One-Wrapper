import async from 'async';
import getRequest from "../utils/request";
import Lap from '../config/lapTimes/lap';
import LapList from '../config/lapTimes/lapList';
import config from '../utils/config';

export default class LapTimes {
    getLapTimes(season: string, round: string, callback: any, responsesValidator: any) {
        let url = config.baseUrl + season + "/" + round + "/laps.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutLapTimes(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new LapList(response["MRData"]["LapTable"]["Laps"]));
            }
        });
    }

    getDriverLapTimes(season: string, round: string, driverId: string, callback: any, responsesValidator: any) {
        let url = config.baseUrl + season + "/" + round + "/drivers/" + driverId + "/laps.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutLapTimes(response)) {
                callback(new Error('Invalid season/round/driver ID.'));
            }
            else {
                callback(null, new LapList(response["MRData"]["LapTable"]["Laps"]));
            }
        });
    }

    /*

    getLaps(season: string, round: string, callback: any, responsesValidator: any) {
        let url = config.baseUrl + season + "/" + round + "/laps.json";
        getRequest(url, 0, config.defaultResponseRows, function(err: any, response: any) {
            if (err) {
                callback(err);
            }
            else if (responsesValidator.responseWithoutLapTimes(response)) {
                callback(new Error('Invalid season/round.'));
            }
            else {
                callback(null, new LapList(response["MRData"]["LapTable"]["Laps"]));
            }
        });
    }

    */

    fixSplitLaps(splitLaps: any) {
        var arrayWithRepeatedElems: any = [];

        // Merge all the parts into one single array
        splitLaps.forEach(function(part: any) {
            arrayWithRepeatedElems = arrayWithRepeatedElems.concat(part);
        });

        // Merge the elements that belong to the same lap
        var arrayWithoutRepeatedElems: any = [];
        var index = 0;
        while (index < arrayWithRepeatedElems.length) { // last element or not repeated
            if (index === arrayWithRepeatedElems.length - 1
                    || arrayWithRepeatedElems[index].number !== arrayWithRepeatedElems[index+1].number) {
                arrayWithoutRepeatedElems.push(arrayWithRepeatedElems[index]);
                ++index;
            }
            else { // repeated element
                arrayWithRepeatedElems[index].Timings =
                    arrayWithRepeatedElems[index].Timings.concat(arrayWithRepeatedElems[index+1].Timings);
                arrayWithoutRepeatedElems.push(arrayWithRepeatedElems[index]);
                index += 2;
            }
        }

        // Create the array that contains the timings for all the laps
        let result: any = [];
        arrayWithoutRepeatedElems.forEach(function(lapInfo: any) {
           result.push(new LapList(lapInfo));
        });
        return result;
    }
}