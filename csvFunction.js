//This one goes with Seaside Resort
const fs = require('fs');
const csv = require('csv-parser');
const seasideResortFish = require('./seasideResort.js');
module.exports = seasideResortFish;
const allFish = []

  // Read CSV to feed information into each object
  fs.createReadStream('seasideResort.csv')
    .pipe(csv())
    .on('data', (row) => {
      createFish(row);
    })
      .on('end', () => {
    console.log(seasideResortFish);
  });

/*Created function to read each row of data and store in the fish objects. Some of the children objects have arrays
*/
function createFish(row) {
  const fish = {
    fishname: row.fishName,
    rarity: row.rarity,
    tags: row.tags.split(", "),
    region: row.region,
    locations: row.locations.split(", "),
    dlcReq: row.dlcReq,
    timeOfDay: row.timeOfDay.split(", "),
    weatherEvent: row.weatherEvent,
    bait: row.bait,
    lure: row.lure,
    bonusCD: row.bonusCD,
    bonusItem: row.bonusItem,
    sizes: row.sizes.split(", "),
    caught: {
      tiny: false,
      regular: false,
      huge: false
    },
  };
// pushing fish to another file.
    seasideResortFish.push(fish);
    return fish;
}
