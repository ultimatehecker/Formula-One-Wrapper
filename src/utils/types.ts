export type Drivers = Driver[];

export interface Driver {
    id: string;
    code: string;
    number?: number;
    firstName: string;
    lastName: string;
    dob: string;
    nationality: string;
}

export type Constructors = Constructor[];

export interface Constructor {
    id: string;
    name: string;
    nationality: string;
}

export interface Circuit {
    id: string;
    name: string;
    location: Location;
}

export type Results = Result[];

export interface Result {
    season: number;
    location: Location
}

export type QualifyingResults = Qualifying[];

export interface Qualifying {
    season: number;
    location: Location;
}

export type RacesSchedule = RaceSchedule[];

export interface RaceSchedule {
    season: number;
    round: number;
    name: string;
    circuit: Circuit;
    date: Date;
}

export type DriverStandings = DriverStanding[];

export interface StandingList<T> {
    season: number;
    number: number;
    standing: T;
}

export interface DriverStanding {
    position: number;
    points: number;
    wins: number;
    driver: Driver;
    constructors: Constructors;
}

export type FinishingStatus = FinishingStatus[];

export interface PitStop {
    season: number;
    location: Location;
}

export type LapTimes = LapTime[];

export interface LapTime {
    season: number;
    lapNumber: number;
    location: Location;
}

export type PitStops = PitStop[];

export interface PitStop {
    id: number;
    season: number;
    location: Location
}

export interface Location {
    latitude: number;
    longitude: number;
    country: string;
    city: string;
}