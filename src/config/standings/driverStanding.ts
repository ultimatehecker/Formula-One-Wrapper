import Driver from "../drivers/driver.js";
import Constructor from "../constructors/constructor.js";

export default class DriverStanding {
    constructor(driverStandingParser: any) {
        this.pos = parseInt(driverStandingParser.pos);
        this.points = parseInt(driverStandingParser.points);
        this.wins = parseInt(driverStandingParser.wins);
        this.driver = new Driver(driverStandingParser.Driver);
        this.constructorName = new Constructor(driverStandingParser.Constructors[0]);
    }

    pos: number
    points: number
    wins: number
    driver: Driver
    constructorName: Constructor
}