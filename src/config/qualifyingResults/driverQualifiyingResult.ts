import Driver from "../drivers/driver.js";
import Constructor from "../constructors/constructor.js";

export default class DriverQualifyingResult {
    constructor(qualifyingResultParser: any) {
        this.number = parseInt(qualifyingResultParser.number);
        this.position = parseInt(qualifyingResultParser.position);
        this.driver = new Driver(qualifyingResultParser.Driver);
        this.constructorName = new Constructor(qualifyingResultParser.Constructor);
        this.q1 = qualifyingResultParser.Q1 || null;
        this.q2 = qualifyingResultParser.Q2 || null;
        this.q3 = qualifyingResultParser.Q3 || null;
    }

    number: number
    position: number
    driver: Driver
    constructorName: Constructor
    q1: any
    q2: any
    q3: any
}