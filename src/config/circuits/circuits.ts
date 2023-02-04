import LocationFinder from './locationFinder';

export default class Circuit {
    constructor(circuitParser: any) {
        this.circuitId = circuitParser.circuitId;
        this.url = circuitParser.url;
        this.circuitName = circuitParser.circuitName;
        this.location = new LocationFinder(circuitParser.LocationFinder);
    }

    circuitId: string;
    url: string;
    circuitName: string;
    location: LocationFinder;

}