import ErgastClient from "./api/api.js";

const ergastClient = new ErgastClient();

ergastClient.getSeason(2017, function(err: any, season: any) {
  if (err) {
    console.error(err);
  } else {
    console.log(season);
  }
});