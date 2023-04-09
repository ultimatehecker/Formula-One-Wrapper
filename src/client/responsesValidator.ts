export default class ResponsesValidator {

    responseWithoutRaces(callResponse: any) {
        console.log(callResponse);
        return callResponse.data.MRData.RaceTable.Races.length === 0;
    }

    responseWithoutCircuits(callResponse: any) {
        return callResponse.data.MRData.CircuitTable.Circuits.length === 0;
    }

    responseWithoutConstructors(callResponse: any) {
        return callResponse.data.MRData.ConstructorTable.Constructors.length === 0;
    }

    responseWithoutDrivers(callResponse: any) {
        return callResponse.data.MRData.DriverTable.Drivers.length === 0;
    }

    responseWithoutStatuses(callResponse: any) {
        return callResponse.data.MRData.StatusTable.Status.length === 0;
    }

    responseWithoutStandingsLists(callResponse: any) {
        return callResponse.data.MRData.StandingsTable.StandingsLists.length === 0;
    }
}