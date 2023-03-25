import Driver from "../drivers/driver.js";
import Constructor from "../constructors/constructor.js";
import Time from "../lapTimes/time.js";
import FastestLap from "../lapTimes/fastestLap.js";

export default class DriverRaceResult {
    constructor(raceResultParser: any) {
        this.number = parseInt(raceResultParser.number);
        this.pos = parseInt(raceResultParser.pos);
        this.points = parseInt(raceResultParser.points);
        this.driver = new Driver(raceResultParser.Driver);
        this.constructorName = new Constructor(raceResultParser.Constructor);
        this.grid = parseInt(raceResultParser.grid);
        this.laps = parseInt(raceResultParser.laps);
        this.status = raceResultParser.status;
        this.time = raceResultParser.Time ? new Time(raceResultParser.Time) : this.time = null;
        this.fastestLap = raceResultParser.FastestLap ? new FastestLap(raceResultParser.FastestLap) : this.fastestLap = null;
    }

    number: number
    pos: number
    points: number
    driver: Driver
    constructorName: Constructor
    grid: number
    laps: number
    status: any
    time: Time | null
    fastestLap: FastestLap | null
}