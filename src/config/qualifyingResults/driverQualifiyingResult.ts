import Driver from "../drivers/driver";
import Constructor from "../constructors/constructor";

export default class DriverQualifyingResult {

    public number: number;
    public position: number;
    public driver: Driver;
    public constructorName: Constructor;
    public q1: any;
    public q2: any;
    public q3: any;

    constructor(qualifyingResultParser: any) {
        this.number = parseInt(qualifyingResultParser.number);
        this.position = parseInt(qualifyingResultParser.position);
        this.driver = new Driver(qualifyingResultParser.Driver);
        this.constructorName = new Constructor(qualifyingResultParser.Constructor);
        this.q1 = qualifyingResultParser.Q1 || null;
        this.q2 = qualifyingResultParser.Q2 || null;
        this.q3 = qualifyingResultParser.Q3 || null;
    }
}