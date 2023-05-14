import Driver from "../drivers/driver";
import Constructor from "../constructors/constructor";

export default class DriverStanding {

    public position: number; // TODO: figure out why this is a number
    public points: number; // TODO: figure out why this is a number
    public wins: number; // TODO: figure out why this is a number
    public driver: Driver;
    public constructorName: Constructor;

    constructor(driverStandingParser: any) {
        this.position = parseInt(driverStandingParser.pos);
        this.points = parseInt(driverStandingParser.points);
        this.wins = parseInt(driverStandingParser.wins);
        this.driver = new Driver(driverStandingParser.driver);
        this.constructorName = new Constructor(driverStandingParser.constructorName[0]);
    }
}