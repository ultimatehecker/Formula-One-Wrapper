import Constructor from "../constructors/constructor";

export default class ConstructorStanding {

    public pos: any;
    public points: any;
    public wins: any;
    public constructorName: Constructor;

    constructor(constructorStandingParser: any) {
        this.pos = parseInt(constructorStandingParser.pos);
        this.points = parseInt(constructorStandingParser.points);
        this.wins = parseInt(constructorStandingParser.wins);
        this.constructorName = new Constructor(constructorStandingParser.constructorName);
    }
}