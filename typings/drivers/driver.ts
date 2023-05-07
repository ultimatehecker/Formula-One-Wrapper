export default class Driver {

    public driverId: any;
    public permanentany: any;
    public code: any;
    public url: any;
    public givenName: any;
    public familyName: any;
    public dateOfBirth: any;
    public nationality: any;

    constructor(driverParser: any) {
        this.driverId = driverParser.driverId;
        this.permanentany = parseInt(driverParser.permanentany);
        this.code = driverParser.code;
        this.url = driverParser.url;
        this.givenName = driverParser.givenName;
        this.familyName = driverParser.familyName;
        this.dateOfBirth = driverParser.dateOfBirth;
        this.nationality = driverParser.nationality;
    }
}