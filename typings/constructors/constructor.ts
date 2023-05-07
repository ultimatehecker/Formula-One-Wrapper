export default class Constructor {

    public constructorId: any;
    public url: any;
    public name: any;
    public nationality: any;

    constructor(constructorParser: any) {
        this.constructorId = constructorParser.constructorId;
        this.url = constructorParser.url;
        this.name = constructorParser.name;
        this.nationality = constructorParser.nationality;
    }
}