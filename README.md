This is very much a work in progress! I love the game Hello Kitty Island Adventure! wiki.gg does a great job of supplying in depth information on the game, but requires a lot of navigation to get to all of the information you need about a particular subject. The area of the game I am choosing to focus on for now is fish. There are achievments in the game for catching all of the fish from the different regions, but the problem is each of those fish come in three different sizes. The achievements in the game do not tell you what you are missing. So I am building a companion app. Something that will be visually appealing, give a user all the information about a given fish, and track whether or not they have caught it and which sizes they have caught. here is a sample of the data that will be used:  as of right now I have the functions written to fill in the currency wty and the fwish bonus but I haven't called them into the csv parser yet. 

  {
    fishname: 'Tropical Sunfish',
    rarity: 'Uncommon',
    tags: [ 'Tropical', 'Rare' ],
    region: 'Seaside Resort',
    locations: [ 'Southern shores of Hopscotch Islands' ],
    dlcReq: null,
    timeOfDay: [ 'Day', 'Evening' ],
    weatherEvent: null,
    bait: 'Tofu Pizza',
    lure: 'Petal Plucker Lure',
    bonusCD: 'Sand-sational Sunset (Twilight Mix)',
    bonusItem: null,
    fwishWellBonus: '',
    fishAlmanacReference: [ '#2', '#44' ],
    badtzCurrency: 'Sand Dollar',
    currencyQty: '',
    sizes: [ 'Tiny', 'Regular', 'Huge' ],
    caught: { tiny: false, regular: false, huge: false }
  }
