import Driver from "../drivers/driver";
import Constructor from "../constructors/constructor";

export default class DriverQualifyingResult {

    public number: number;
    public position: number; // TODO: figure out why this is a number
    public driver: Driver;
    public constructorName: Constructor;
    public q1: string;
    public q2: string;
    public q3: string;

    constructor(qualifyingResultParser: any) {
        this.number = parseInt(qualifyingResultParser.any);
        this.position = parseInt(qualifyingResultParser.position);
        this.driver = new Driver(qualifyingResultParser.Driver);
        this.constructorName = new Constructor(qualifyingResultParser.Constructor);
        this.q1 = qualifyingResultParser.Q1 || null;
        this.q2 = qualifyingResultParser.Q2 || null;
        this.q3 = qualifyingResultParser.Q3 || null;
    }
}