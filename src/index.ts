import DriverParser from "./parsers/driver.js";
import DriversParser from "./parsers/drivers.js";
import ConstructorParser from "./parsers/constructor.js";
import ConstructorsParser from "./parsers/constructors.js";
import DriverStandingsParser from "./parsers/driverStandings.js";
import ConstructorStandingsParser from "./parsers/constructorStandings.js";
import RacesScheduleParser from "./parsers/racesSchedule.js";
import StandingListParser from "./parsers/standingList.js";

import { makeRequest } from "./utils/request.js";
import { Constructor, Constructors, ConstructorStandings, Driver, Drivers, DriverStandings, RacesSchedule, StandingList } from "./utils/types";

const getConstructors = async (year: number | string): Promise<Constructors> => {
    return makeRequest<Constructors>(`/${year}/constructors`, ConstructorsParser.getInstance());
};

const getDrivers = async (year: number | string): Promise<Drivers> => {
    return makeRequest<Drivers>(`/${year}/drivers`, DriversParser.getInstance());
}

const getDriverInformation = async (id: string): Promise<Driver> => {
    return makeRequest<Driver>(`/drivers/${id}`, DriverParser.getInstance());
}

const getConstructorInformation = async (id: string): Promise<Constructor> => {
    return makeRequest<Constructor>(`/constructors/${id}`, ConstructorParser.getInstance());
}

const getCurrentConstructors = async (): Promise<Constructors> => {
    return getConstructors(new Date().getFullYear());
};

const getCurrentDrivers = async (): Promise<Drivers> => {
    return getDrivers(new Date().getFullYear());
}

const getCurrentDriverStandings = async(): Promise<StandingList<DriverStandings>> => {
    return makeRequest<StandingList<DriverStandings>>(`/current/driverStandings`, 
    StandingListParser.getInstance(), 
    DriverStandingsParser.getInstance());
}

const getDriverStandings = async (year: number | string, round?: number): Promise<StandingList<DriverStandings>> => {
    let url = `/${year}/driverStandings`;

    if(round && isFinite(round) && round > 0) {
        url = `/${year}/${round}/driverStandings`;
    }

    return makeRequest<StandingList<DriverStandings>>(url, 
        StandingListParser.getInstance(),
        DriverStandingsParser.getInstance());
}

const getCurrentConstructorStandings = async (): Promise<StandingList<ConstructorStandings>> => {
    return makeRequest<StandingList<ConstructorStandings>>(
        '/current/constructorStandings',
        StandingListParser.getInstance(),
        ConstructorStandingsParser.getInstance(),
    );
};

const getConstructorStandings = async (year: number | string, round?: number): Promise<StandingList<ConstructorStandings>> => {
    let url = `/${year}/constructorStandings`;
    if (round && isFinite(round) && round > 0) {
        url = `/${year}/${round}/constructorStandings`;
    }

    return makeRequest<StandingList<ConstructorStandings>>(
        url,
        StandingListParser.getInstance(),
        ConstructorStandingsParser.getInstance(),
    );
};

const getCurrentSeasonRacesSchedule = async (): Promise<RacesSchedule> => {
    return makeRequest<RacesSchedule>('/current', RacesScheduleParser.getInstance());
};

const getSeasonRacesSchedule = async (year: number | string): Promise<RacesSchedule> => {
    return makeRequest<RacesSchedule>(`/${year}`, RacesScheduleParser.getInstance());
};

export {
    getCurrentConstructors,
    getConstructors,
    getCurrentDrivers,
    getDrivers,
    getDriverInformation,
    getConstructorInformation,
    getCurrentDriverStandings,
    getDriverStandings,
    getCurrentConstructorStandings,
    getConstructorStandings,
    getCurrentSeasonRacesSchedule,
    getSeasonRacesSchedule,
};