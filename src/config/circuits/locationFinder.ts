export default class LocationFinder {

    public lat: number
    public long: number
    public locality: string
    public country: string

    constructor(locationParser: any) {
        this.lat = parseFloat(locationParser.lat);
        this.long = parseFloat(locationParser.long);
        this.locality = locationParser.locality
        this.country = locationParser.country
    }
}
