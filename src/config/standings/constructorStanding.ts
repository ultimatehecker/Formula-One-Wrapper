import Constructor from "../constructors/constructor";

export default class ConstructorStanding {
    constructor(constructorStandingParser: any) {
        this.pos = parseInt(constructorStandingParser.pos);
        this.points = parseInt(constructorStandingParser.points);
        this.wins = parseInt(constructorStandingParser.wins);
        this.constructorName = new Constructor(constructorStandingParser.Constructor);
    }

    pos: number
    points: number
    wins: number
    constructorName: Constructor
}