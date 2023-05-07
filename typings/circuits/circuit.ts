import LocationFinder from './locationFinder';

export default class Circuit {
  public circuitId: any;
  public url: any;
  public circuitName: any;
  public location: LocationFinder;

  public constructor(circuitParser: any) {
    this.circuitId = circuitParser.circuitId;
    this.url = circuitParser.url;
    this.circuitName = circuitParser.circuitName;
    this.location = new LocationFinder(circuitParser.LocationFinder);
  }
}