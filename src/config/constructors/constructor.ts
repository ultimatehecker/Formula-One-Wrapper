export default class Constructor {
    constructor(constructorParser: any) {
        this.constructorId = constructorParser.constructorId;
        this.url = constructorParser.url;
        this.name = constructorParser.name;
        this.nationality = constructorParser.nationality;
    }

    constructorId: string
    url: string
    name: string
    nationality: string
}