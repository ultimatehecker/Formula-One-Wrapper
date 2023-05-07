export default class Location {

    public lat: number // TODO: figure out why this is a number
    public long: number // TODO: figure out why this is a number
    public locality: string
    public country: string

    constructor(locationParser: any) {
        this.lat = parseFloat(locationParser.lat);
        this.long = parseFloat(locationParser.long);
        this.locality = locationParser.locality
        this.country = locationParser.country
    }
}
