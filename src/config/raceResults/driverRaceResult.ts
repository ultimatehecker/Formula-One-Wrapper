import Driver from "../drivers/driver";
import Constructor from "../constructors/constructor";
import Time from "../lapTimes/time";
import FastestLap from "../lapTimes/fastestLap";

export default class DriverRaceResult {

    public number: number;
    public pos: number;
    public points: number;
    public driver: Driver;
    public constructorName: Constructor;
    public grid: number;
    public laps: number;
    public status: any;
    public time: Time | null;
    public fastestLap: FastestLap | null;

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
        this.fastestLap = raceResultParser.fastestLap ? new FastestLap(raceResultParser.fastestLap) : this.fastestLap = null;
    }
}