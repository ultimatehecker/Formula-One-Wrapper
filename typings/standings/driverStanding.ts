import Driver from "../drivers/driver";
import Constructor from "../constructors/constructor";

export default class DriverStanding {

    public pos: any;
    public points: any;
    public wins: any;
    public driver: Driver;
    public constructorName: Constructor;

    constructor(driverStandingParser: any) {
        this.pos = parseInt(driverStandingParser.pos);
        this.points = parseInt(driverStandingParser.points);
        this.wins = parseInt(driverStandingParser.wins);
        this.driver = new Driver(driverStandingParser.driver);
        this.constructorName = new Constructor(driverStandingParser.constructorName[0]);
    }
}