export default class Driver {
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

    driverId: string
    permanentNumber: number
    code: any
    url: string
    givenName: string
    familyName: string
    dateOfBirth: string
    nationality: string
}