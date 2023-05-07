export default class LocationFinder {

    public lat: any
    public long: any
    public locality: any
    public country: any

    constructor(locationParser: any) {
        this.lat = parseFloat(locationParser.lat);
        this.long = parseFloat(locationParser.long);
        this.locality = locationParser.locality
        this.country = locationParser.country
    }
}
