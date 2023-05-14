import Location from './location';

export default class Circuit {
  public circuitId: string;
  public url: string;
  public circuitName: string;
  public location: Location;

  public constructor(circuitParser: any) {
    this.circuitId = circuitParser.circuitId;
    this.url = circuitParser.url;
    this.circuitName = circuitParser.circuitName;
    this.location = new Location(circuitParser.Location);
  }
}