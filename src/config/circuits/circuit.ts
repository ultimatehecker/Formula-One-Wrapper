import LocationFinder from './locationFinder';

export default class Circuit {
  public circuitId: string;
  public url: string;
  public circuitName: string;
  public location: LocationFinder;

  public constructor(circuitParser: any) {
    this.circuitId = circuitParser.circuitId;
    this.url = circuitParser.url;
    this.circuitName = circuitParser.circuitName;
    this.location = new LocationFinder(circuitParser.LocationFinder);
  }
}