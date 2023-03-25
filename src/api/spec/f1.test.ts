const ErgastClient = require('../src/index.js');

let ergastClient = new ErgastClient();

describe("Testing the ErgastClient responses", () => {
    it("Returns a that contains the Spanish Grand Prix, celebrated in Montmeló, Spain on 2014-05-11", (done) => {
        ergastClient.getSeason(2014, (err: any, season: any) => {
            let race = season.getRaceByRound(5);
            expect(race.raceName).toEqual("Spanish Grand Prix");
            expect(race.circuit.location.country).toEqual("Spain");
            expect(race.date).toEqual("2014-05-11");
            done();
        });
    });
});