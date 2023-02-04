export default class LocationFinder {
    constructor(locationParser: any) {
        this.lat = parseFloat(locationParser.lat);
        this.long = parseFloat(locationParser.long);
        this.locality = locationParser.locality
        this.country = locationParser.country
    }
  
    lat: number;
    long: number;
    locality: string;
    country: string;
}
