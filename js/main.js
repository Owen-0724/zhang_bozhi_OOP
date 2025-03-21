import Guitar from "./guitar.js";

const fenderStrat = new Guitar(
    "Fender",
    "Stratocaster",
    "Ocean Blue",
    6,
    "Humbucker"
);

const gretschWhiteFalcon = new Guitar(
    "Gretsch",
    "White Falcon",
    "White",
    12,
    "Filter'Tron"
);

console.log(fenderStrat);
fenderStrat.strum();

console.log(gretschWhiteFalcon);
gretschWhiteFalcon.strum();

const fenderBass = new BassGuitar();

console.log(fenderBass);
fenderBass.strum();
fenderBass.SlapDaBass();
