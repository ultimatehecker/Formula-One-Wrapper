import ErgastClient from '../api';

let ergastClient = new ErgastClient();

// Something is wrong with this test (with the circuits)

describe("Testing the call: getSeason", function() {
    it("Returns a that contains the Spanish Grand Prix, celebrated in Montmeló, Spain on 2014-05-11", (done: any) => {
        ergastClient.getSeason(2014, (err: any, season: any) => {
            let race = season.getRace(5);
            expect(race.raceName).toEqual("Spanish Grand Prix");
            expect(race.circuit.location.country).toEqual("Spain");
            expect(race.date).toEqual("2014-05-11");
            done();
        });
    }, 10000);
});

/*

describe("Testing the call: getSeason", function() {
    it("Should return an error because Formula 1 didn't exist in 1900", (done: any) => {
        ergastClient.getSeason(1900, (err: any, season: any) => {
            expect(err).toBeDefined();
            expect(season).toBeUndefined();
            done();
        });
    }, 10000);
});

// Something is wrong with this test (with the circuits)

describe("Testing the call: getRace", function() {
    it("Returns the Chinese Grand Prix which was held on 2014-04-20", (done: any) => {
        ergastClient.getRace(2014, 4, function(err: any, race: any) {
            expect(race.date).toEqual("2014-04-20");
            expect(race.circuit.location.country).toEqual("China");
            done();
        });
    }, 10000);
})

describe("Testing the call: getRace", function() {
    it("Should return an error because Formula 1 didn't exist in 1900", (done: any) => {
        ergastClient.getRace(1900, 1, function(err: any, race: any) {
            expect(err).toBeDefined();
            expect(race).toBeUndefined();
            done();
        });
    }, 10000);
});

*/