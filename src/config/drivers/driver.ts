export default class Driver {

    public driverId: string;
    public permanentNumber: number;
    public code: any;
    public url: string;
    public givenName: string;
    public familyName: string;
    public dateOfBirth: string;
    public nationality: string;

    constructor(driverParser: any) {
        this.driverId = driverParser.driverId;
        this.permanentNumber = parseInt(driverParser.permanentNumber);
        this.code = driverParser.code;
        this.url = driverParser.url;
        this.givenName = driverParser.givenName;
        this.familyName = driverParser.familyName;
        this.dateOfBirth = driverParser.dateOfBirth;
        this.nationality = driverParser.nationality;
    }
}