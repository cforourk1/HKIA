//This one goes with Seaside Resort
const fs = require('fs');
const csv = require('csv-parser');
const fishFunct = require('./seasideResortFishFunctions.js');
const seasideResortFish = require('./seasideResort.js');
module.exports = seasideResortFish;
const allFish = []


  fs.createReadStream('seasideResortFish.csv')
    .pipe(csv())
    .on('data', (row) => {
      createFish(row);
    })
      /* fs means file system, the built in read stream takes  the file and reads it one row at a time. The reading of the file goes row by row to store my data inside the fish objects. Later down in the function, you will see fishname: row.fishname. This means that property will get its value from the row in the spreadsheet with the header of fishName. It continues to do this for the remaining items in the spreadsheet. Instead of me making an item by hand each time. I am also writing the data to a JSON file to look at it later and manipulate by hand if I have to.
  */
    .on('end', () => {
      console.log(seasideResortFish);
      fs.writeFileSync('seasideResortFish.json', JSON.stringify(seasideResortFish, null, 2));
       fs.writeFileSync('seasideResortCaughtFish.jsonc', JSON.stringify(seasideResortFish, ['fishname', 'sizes', 'caught',  'tiny', 'regular', 'huge'] , 2));
  });

/*Created function to read each row of data and store in the fish objects. Some of the children objects have arrayss of their own.
*/
function createFish(row) {
  const fish = {
    fishname: row.fishName,
    rarity: row.rarity,
    tags: row.tags.split(", "),
    region: row.region,
    locations: row.locations.split(", "),
    dlcReq: row.dlcReq ? row.dlcReq : null,
    timeOfDay: row.timeOfDay.split(", "),
    weatherEvent: row.weatherEvent ? row.weatherEvent : null,
    bait: row.bait,
    lure: row.lure ? row.lure : null,
    bonusCD: row.bonusCD ? row.bonusCD : null,
    bonusItem: row.bonusItem ? row.bonusItem : null,
    fwishWellBonus: row.fwishWellBonus,
    fishAlmanacReference: row.fishAlmanacReference.split(", "),
    badtzCurrency: row.badtzCurrency,
    currencyQty: row.currencyQty,
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


