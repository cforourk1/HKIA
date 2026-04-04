/**
 * This function is going to create fish cards for me
 * @param {object} fish - get the fish object
 */
function createCard(fish) {
/* I am learning how to use Javascript to create HTML elements for me by calling my data. This way, I can loop through and create the cards I want without having to do it by hand.
below you will see my first line I am creating a div element to wrap the entire card in. I then move on to create an image item, and a place holder for the fish name. each of these is assigned a class name that will be used later in the design model.
*/
    const elm = document.createElement('div')
    elm.className = 'fishCard'
// this portion calls the image
    const picture = document.createElement('img')
    picture.src = ''
// class name for styling later
    picture.className = 'fishPic'
/* the append feauture here ensures that the picture is actually inside my div tag
*/
    elm.appendChild(picture)
    const fishNames = document.createElement('h3')
// this portion is the place holder for the name of the fish
    fishNames.className = 'fishNamePlate'
// brings in the text I need
    fishNames.innerText = fish.fishname
    elm.appendChild(fishNames)
/* creating the table data for the fish cards here
*/
const fishTable = document.createElement('table')
    elm.appendChild(fishTable)
//create the first row. Class name fishRow for style later.
const rowOne = document.createElement('tr')
    fishTable.appendChild(rowOne)
// create the header of that row example - region
// th means table header and td means table data
const regionLabel = document.createElement('th')
    regionLabel.innerText = 'Region'
    rowOne.appendChild(regionLabel)
// create a cell for the data to be held inside the row - example Seaside Resort
const regionName = document.createElement('td')
    regionName.innerText = fish.region
    rowOne.appendChild(regionName)
    
const timeLabel = document.createElement('th')
    timeLabel.innerText = 'Time of Day'
    rowOne.appendChild(timeLabel)

const timeDay = document.createElement('td')
    timeDay.innerText = fish.timeOfDay.join(", ")
    rowOne.appendChild(timeDay)

//time of day label

const weatherLabel = document.createElement('th')
    weatherLabel.innerText = 'Weather Event'
    rowOne.appendChild(weatherLabel)

//time of day data

const weatherType = document.createElement('td')
    weatherType.innerText = fish.weatherEvent
    rowOne.appendChild(weatherType)

//time of day label

const dlcLabel = document.createElement('th')
    dlcLabel.innerText = 'DLC Req'
    rowOne.appendChild(dlcLabel)

//time of day data

const dlcType = document.createElement('td')
    dlcType.innerText = fish.dlcReq
    rowOne.appendChild(dlcType)

// create row 2
const rowTwo = document.createElement('tr')
    fishTable.appendChild(rowTwo)

//location label
    const locationLabel = document.createElement('th')
    locationLabel.innerText = 'Locations'
    rowTwo.appendChild(locationLabel)

//location data

    const location = document.createElement('td')

// join adds the array to the cell. I might come back later and do a list instead of comma
    location.innerText = fish.locations.join(", ")
    rowTwo.appendChild(location)


//Bait label
    const baitLabel = document.createElement('th')
    baitLabel.innerText = 'Bait'
    rowTwo.appendChild(baitLabel)

//bait data
    const baitType = document.createElement('td')
    baitType.innerText = fish.bait
    rowTwo.appendChild(baitType)

//Lure label
    const lureLabel = document.createElement('th')
    lureLabel.innerText = 'Lure'
    rowTwo.appendChild(lureLabel)

//lure data
    const lureType = document.createElement('td')
    lureType.innerText = fish.lure
    rowTwo.appendChild(lureType)


//almanac label
    const almanacLabel = document.createElement('th')
    almanacLabel.innerText = 'Fish Alamanac Reference'
    rowTwo.appendChild(almanacLabel)

//alamanac data
    const alamancList = document.createElement('td')
    alamancList.innerText = fish.fishAlmanacReference.join(", ")
    rowTwo.appendChild(alamancList)

// row three
const rowThree = document.createElement('tr')
    fishTable.appendChild(rowThree)

//Rarity label
    const rareLabel = document.createElement('th')
    rareLabel.innerText = 'Rarity Type'
    rowThree.appendChild(rareLabel)

//rarity data
    const rareType = document.createElement('td')
    rareType.innerText = fish.rarity
    rowThree.appendChild(rareType)

//bonus item label
    const itemLabel = document.createElement('th')
    itemLabel.innerText = 'Bonus Item on Catch'
    rowThree.appendChild(itemLabel)

// item data
    const itemBonus = document.createElement('td')
    itemBonus.innerText = fish.bonusItem
    rowThree.appendChild(itemBonus)

//bonus cd label
    const cdLabel = document.createElement('th')
    cdLabel.innerText = 'Bonus CD on Catch'
    rowThree.appendChild(cdLabel)

//bonus cd data
    const cdBons = document.createElement('td')
    cdBons.innerText = fish.bonusCD
    rowThree.appendChild(cdBons)

// Row Four

const rowFour = document.createElement('tr')
    fishTable.appendChild(rowFour)

//Badtz label
    const badLabel = document.createElement('th')
    badLabel.innerText = 'Badtz Currency'
    rowFour.appendChild(badLabel)

//Badtz Currency Data
    const currencyItem = document.createElement('td')
    currencyItem.innerText = fish.badtzCurrency
    rowFour.appendChild(currencyItem)

//Badtz currency qty
    const curQty = document.createElement('th')
    curQty.innerText = 'Currency Qty'
    rowFour.appendChild(curQty)

// currency data  qty
    const currencyGiven = document.createElement('td')
    currencyGiven.innerText = fish.currencyQty
    rowFour.appendChild(currencyGiven)

//Fwish bonus
    const fwishLabel = document.createElement('th')
    fwishLabel.innerText = 'Possible Fwish Bonus'
    rowFour.appendChild(fwishLabel)

//bonus fwish data
    const fwishBons = document.createElement('td')
    fwishBons.innerText = fish.fwishWellBonus
    rowFour.appendChild(fwishBons)

// row 5

































}
