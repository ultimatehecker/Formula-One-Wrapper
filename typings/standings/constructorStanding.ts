import Constructor from "../constructors/constructor";

export default class ConstructorStanding {

    public position: number; // TODO: figure out why this is a number
    public points: number; // TODO: figure out why this is a number
    public wins: number; // TODO: figure out why this is a number
    public constructorName: Constructor;

    constructor(constructorStandingParser: any) {
        this.position = parseInt(constructorStandingParser.pos);
        this.points = parseInt(constructorStandingParser.points);
        this.wins = parseInt(constructorStandingParser.wins);
        this.constructorName = new Constructor(constructorStandingParser.constructorName);
    }
}