export default class Constructor {

    public constructorId: string;
    public url: string;
    public name: string;
    public nationality: string;

    constructor(constructorParser: any) {
        this.constructorId = constructorParser.constructorId;
        this.url = constructorParser.url;
        this.name = constructorParser.name;
        this.nationality = constructorParser.nationality;
    }
}