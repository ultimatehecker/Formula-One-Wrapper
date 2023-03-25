export default class ResponsesValidator {
    responseWithoutRaces(callResponse: any) {
        return callResponse["MRData"]["RaceTable"]["Races"].length === 0;
    }

    responseWithoutCircuits(callResponse: any) {
        return callResponse["MRData"]["CircuitTable"]["Circuits"].length === 0;
    }

    responseWithoutConstructors(callResponse: any) {
        return callResponse["MRData"]["ConstructorTable"]["Constructors"].length === 0;
    }

    responseWithoutDrivers(callResponse: any) {
        return callResponse["MRData"]["DriverTable"]["Drivers"].length === 0;
    }

    responseWithoutStatuses(callResponse: any) {
        return callResponse["MRData"]["StatusTable"]["Status"].length === 0;
    }

    responseWithoutStandingsLists(callResponse: any) {
        return callResponse["MRData"]["StandingsTable"]["StandingsLists"].length === 0;
    }
}